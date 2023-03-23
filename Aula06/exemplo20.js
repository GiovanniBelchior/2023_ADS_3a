class Conta{
    constructor(){
        this.saldo = 0
    }
}

class corrente extends Conta{
    constructor(pLimite){
        super()
        this.limite = pLimite
    }

    get Limite(){return this.limite}
    set Limite(pLimite){return this.limite = limite}
}

var obj_corrente = new corrente(300)
console.log(obj_corrente)