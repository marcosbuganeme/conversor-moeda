import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

import { Moeda, Conversao, Resposta } from '../models'
import { MoedaService, ConversorService } from '../services'

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  private moedas: Moeda[]
  conversao: Conversao
  possuiErro: boolean
  resposta: Resposta

  @ViewChild("conversaoForm") conversaoForm: NgForm

  constructor(private moedaService: MoedaService,
              private conversorService: ConversorService) { }

  ngOnInit() {
    this.init()
    this.moedas = this.moedaService.listarTodas();
  }

  init(): void {
    this.possuiErro = false
    this.conversao = new Conversao('USD', 'BRL', null)
  }

  converter(): void {
    if (this.conversaoForm.form.valid)
      alert('Convertendo: ' + JSON.stringify(this.conversao))
  }
}