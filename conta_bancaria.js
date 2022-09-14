class ContaBancaria {
	construtor(agencia, numero, tipo, saldo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0; //A utilização do "_" é para mostras que está sendo utilizado GET e SET.
	}

	get saldo(){
		return this._saldo;
	}

	set saldo(valor) {
		this._saldo = valor;
	}

	sacar(valor){
		if (valor > this._saldo) {
			return "Saldo insuficiente para saque."
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {

		this._saldo = this._saldo + valor;
		return this._saldo;
	}

}

class ContaCorrente extends ContaBancaria{
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this.cartaoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}
}	

class ContaPoupanca extends ContaBancaria{
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupanca';
	}
}	

class ContaUniversitaria extends ContaBancaria{
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if(valor > 600) {
			return "Saldo insuficiente para saque."
		}

		this._saldo = this._saldo = valor;
	}

}	

