import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Livros } from '../livros';
import { LivrosServiceService } from '../service/livros-service.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  
  @Input() livro: Livros = new Livros();  
  @Output() retorno = new EventEmitter<Livros>();

  livroService = inject(LivrosServiceService)

  constructor(){}

  ngOnInit() :void{
    
  }

  salvar(){
    this.livroService.save(this.livro).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.retorno.emit(livro);
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
