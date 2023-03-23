class Conta{
    constructor(){
        this.saldo = 0
    }
    get Saldo(){return this.saldo}
    set Saldo(pSaldo){return this.saldo = pSaldo}

    imprimir(){
        return "Saldo:" + this.saldo
    }
}

class corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite){return this.limite = limite}

    imprimir(){
        return super.imprimir() + "\nLimite:" + this.limite
    }
}

var obj_corrente = new corrente(300)
console.log(obj_corrente.imprimir())