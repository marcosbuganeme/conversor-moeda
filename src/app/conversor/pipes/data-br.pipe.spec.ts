import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('deve criar um pipe databr', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2019-04-02 para 02/04/2019', () => {
    const pipe = new DataBrPipe()
    expect(pipe.transform('2019-04-02')).toEqual('02/04/2019')
  })
});
