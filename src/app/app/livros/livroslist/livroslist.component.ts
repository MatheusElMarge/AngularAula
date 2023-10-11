import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivrosServiceService } from '../service/livros-service.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {

  lista: Livros[] = [];

  livroSelecionadaParaEdicao: Livros = new Livros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  listaService = inject(LivrosServiceService);

  constructor() {
    this.listAll();
  }


  listAll() {
    this.listaService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }


  adicionar(modal: any) {
    this.livroSelecionadaParaEdicao = new Livros();
    this.modalService.open(modal, { size: 'lg' });
  }

  editar(editar: any, livro: any, indice: number) {
    this.indiceSelecionadoParaEdicao = indice;
    this.livroSelecionadaParaEdicao = livro;
    this.modalService.open(editar, { size: 'lg' });
  }

  addOuEditarLivro(livro: Livros) {
    if (livro.id > 0) {
      this.lista[this.indiceSelecionadoParaEdicao] = livro;
    } else {
      this.lista.push(livro);
    }

    this.modalService.dismissAll();
  }
}



