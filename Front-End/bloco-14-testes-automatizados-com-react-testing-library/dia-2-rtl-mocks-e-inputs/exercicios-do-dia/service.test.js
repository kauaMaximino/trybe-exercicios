const service = require('./service');

describe('exercicio 1', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  it('Utilize o mock e defina o retorno padrão como 10.', () => {
    expect(service.randomNumber()).toBe(10);
  })

  it('Teste se a função foi chamada', () => {
    expect(service.randomNumber).toHaveBeenCalled();
  })

  it('Qual o retorno da função e quantas vezes foi chamada', () => {
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
});

describe('exercicio 2', () => {
  service.numberRandomDiv = jest.fn().mockImplementationOnce((a, b) => a / b);

  it('Defina o mock da função para a nova funcionalidade da função.', () => {
    expect(service.numberRandomDiv(10, 2)).toBe(5)
  })

  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    expect(service.numberRandomDiv).toHaveBeenCalled()
  })

  it('Verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
    expect(service.numberRandomDiv).toHaveBeenCalledTimes(1)
  })
})