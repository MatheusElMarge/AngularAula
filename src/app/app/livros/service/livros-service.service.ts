import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Livros } from '../livros';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosServiceService {

  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() {}

  listAll(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API);
  }

  save(salvar: Partial<Livros>){
    if(salvar.id){
      console.log('update');     
      return this.update(salvar);
    }
    console.log('salvar');   
    return this.create(salvar);
  }

  exemploErro(): Observable<Livros[]> {
    return this.http.get<Livros[]>(this.API + '/erro');
  }

  findById(id: string){
    return this.http.get<Livros>(`api/livro/id/${id}`);
  } 

  private create(salvar: Partial<Livros>){
    return this.http.post<Livros>(`api/livro/cadastrar`, salvar);
  }

  private update(salvar: Partial<Livros>){
    return this.http.put<Livros>(`api/livro/editar/${salvar.id}`, salvar);
  }

}
