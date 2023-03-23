class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }
    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){return this.preco = pPreco}

    calcularDEsconto(){
        this.preco = this.preco - 10
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 300)
obj_livro1.calcularDesconto()
console.log("Nome do livro: "+ obj_livro1.nome)
console.log("Preço: "+ obj_livro1.preco)