class NegociacaoService {

    constructor() {
        this.http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        this.http
        .get('negociacoes/semana')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(erro => {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações da semana do servidor');
        });
    } 

    obterNegociacoesDaSemanaAnterior() {
        this.http
        .get('negociacoes/anterior')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(erro => {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações da semana anterior do servidor');
        });
    } 

    obterNegociacoesDaSemanaRetrasada() {
        this.http
        .get('negociacoes/retrasada')
        .then(negociacoes => {
            resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(erro => {
            console.log(xhr.responseText);
            reject('Não foi possivel obter as negociações da semana retrasada do servidor');
        });
    } 
}