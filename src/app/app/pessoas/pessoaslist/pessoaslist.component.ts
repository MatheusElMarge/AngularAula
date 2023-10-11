import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BdPessoasService } from '../bd-pessoas.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})

export class PessoaslistComponent {

  lista: Pessoa[] = [];

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  listaService = inject(BdPessoasService);

  constructor(){
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


 adicionar(modal: any){
    this.pessoaSelecionadaParaEdicao = new Pessoa();
    this.modalService.open(modal, {size: 'lg'});
 }

 editar(editar: any, pessoa:any, indice: number){
  this.indiceSelecionadoParaEdicao = indice;
  this.pessoaSelecionadaParaEdicao = pessoa;
  this.modalService.open(editar, {size: 'lg'});
}

addOuEditarPessoa(pessoa : Pessoa){
  if(pessoa.id > 0){
    this.lista[this.indiceSelecionadoParaEdicao] =pessoa;
  }else{
    this.lista.push(pessoa);
  }

  this.modalService.dismissAll();
}
}
