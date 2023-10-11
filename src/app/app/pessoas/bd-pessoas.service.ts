import { Pessoa } from './pessoa';
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdPessoasService {

  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API);
  }

  save(salvar: Partial<Pessoa>){
    if(salvar.id){
      console.log('update');     
      return this.update(salvar);
    }
    console.log('salvar');   
    return this.create(salvar);
  }

  exemploErro(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API + '/erro');
  }

  findById(id: string){
    return this.http.get<Pessoa>(`api/pessoa/id/${id}`);
  } 

  private create(salvar: Partial<Pessoa>){
    return this.http.post<Pessoa>(`api/pessoa/cadastrar`, salvar);
  }

  private update(salvar: Partial<Pessoa>){
    return this.http.put<Pessoa>(`api/pessoa/editar/${salvar.id}`, salvar);
  }


}
