import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Conversao, Resposta } from '../models'

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=aa89451839381a6b19c42c3a349abf39";

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<any> {

    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

  	return this.http.get(this.BASE_URL + params);
  }

  cotacaoPara(resposta: Resposta, 
		          conversao: Conversao): number {

  	if (resposta === undefined)
  		return 0;

  	return resposta.rates[conversao.moedaPara];
  }

  cotacaoDe(resposta: Resposta, 
		        conversao: Conversao): string {

  	if (resposta === undefined)
  		return '0';

  	return (1 / resposta.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(resposta: Resposta): string {

    if (resposta === undefined)
      return '';

    return resposta.date;
  }
}
