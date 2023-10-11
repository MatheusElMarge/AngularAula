import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosServiceService {

  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  save(salvar: Partial<Carro>){
    if(salvar.id){
      console.log('update');     
      return this.update(salvar);
    }
    console.log('salvar');   
    return this.create(salvar);
  }

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/erro');
  }

  findById(id: string){
    return this.http.get<Carro>(`api/carro/id/${id}`);
  } 

  private create(salvar: Partial<Carro>){
    return this.http.post<Carro>(`api/carros/cadastrar`, salvar);
  }

  private update(salvar: Partial<Carro>){
    return this.http.put<Carro>(`api/carro/editar/${salvar.id}`, salvar);
  }


}
