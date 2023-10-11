import { Component, inject } from '@angular/core';
import { Carro } from '../carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrosServiceService } from '../service/carros-service.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  carroSelecionadaParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  listaService = inject(CarrosServiceService);

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
    this.carroSelecionadaParaEdicao = new Carro();
    this.modalService.open(modal, {size: 'lg'});
 }

 editar(editar: any, carro:any, indice: number){
  this.indiceSelecionadoParaEdicao = indice;
  this.carroSelecionadaParaEdicao = carro;
  this.modalService.open(editar, {size: 'lg'});
}

addOuEditarCarro(carro : Carro){
  if(carro.id > 0){
    this.lista[this.indiceSelecionadoParaEdicao] =carro;
  }else{
    this.lista.push(carro);
  }

  this.modalService.dismissAll();
}

}
