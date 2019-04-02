import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataEn: string): any {

    if (!dataEn)
      return '';

    const dataArr = dataEn.split('-')

    if (dataArr.length !== 3)
      return dataEn

    const dia = dataArr[2]
    const mes = dataArr[1]
    const ano = dataArr[0]

    return dia + '/' + mes + '/' + ano
  }
}