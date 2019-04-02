import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Resposta, Conversao } from '../models'
import { ConversorService } from '../services'

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id: string
  @Input() resposta: Resposta
  @Input() conversao: Conversao
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>()

  constructor(private conversorService: ConversorService) { }

  ngOnInit() {
  }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): string {

    if (this.resposta === undefined)
      return '0'

      return (this.resposta.rates[this.conversao.moedaPara]).toFixed(2)
  }

  get cotafcaoPara(): number {
    return this.conversorService.cotacaoPara(this.resposta, this.conversao)
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.resposta, this.conversao)
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.resposta)
  }
}