class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }
    get Nome(){return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){return this.preco = pPreco}
}

var obj_livro1 = new Livro("Use a cabeça Java", 300)
console.log("Nome do livro: "+ obj_livro1.nome)
console.log("Preço: "+ obj_livro1.preco)