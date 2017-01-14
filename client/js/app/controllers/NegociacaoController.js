class NegociacaoController{
	constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

    }

	adiciona(event) {
        event.preventDefault();
        
        let negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);

        console.log(this._listaNegociacoes.negociacoes);
        this._limpaFormulario();
	}

    _limpaFormulario(){
        this._inputData = "";
        this._inputData.focus();
        this._inputQuantidade = 1;
        this._inputValor=0.0;
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}