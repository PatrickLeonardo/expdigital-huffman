const contarFrequencia = (texto) => {
    
    const frequencia = {};

    for(const caracter of texto) {
        frequencia[caracter] = (frequencia[caracter] || 0) + 1
    }

    return frequencia;

}

class NoHuffman {
    constructor(valor, frequencia, direita = null, esquerda = null) {
        this.valor = valor;
        this.frequencia = frequencia;
        this.direita = direita;
        this.esquerda = esquerda;
    }
}

const montarArvore = (frequencia) => {
     
    let fila = [];
    
    for(const caracter in frequencia) {
        fila.push(new NoHuffman(caracter, frequencia[caracter]));
    }

    while(fila.length > 1) {
        
        fila.sort((a, b) => a.frequencia - b.frequencia);
        
        const esquerda = fila.shift();
        const direita = fila.shift();
        
        const novoNo = new NoHuffman(
            esquerda.valor + direita.valor,
            esquerda.frequencia + direita.frequencia,
            esquerda,
            direita
        );
        
        fila.push(novoNo);
        
    }

    return fila[0];

}

const gerarCodigos = (no, caminho = "", codigos = {}) => {

    if(!no) return codigos;
    if(no !== null) codigos[no.valor] = caminho;

    gerarCodigos(no.esquerda, caminho + "0", codigos);
    gerarCodigos(no.direita, caminho + "1", codigos);

    return codigos;

}

const compactar = (texto, codigos) => {

    let resultado = "";

    for(const caracter of texto) {
        resultado += codigos[caracter];
    }

    return resultado;

}

const descompactar = (bits, arvore) => {
    
    let resultado = "";
    let noAtual = arvore;

    for(const bit of bits) {
        
        noAtual = (bit === "0") ? noAtual.esquerda : noAtual.direita;
        
        if(noAtual.esquerda === null && noAtual.direita === null) {
            resultado += noAtual.valor;
            noAtual = arvore;
        }

    }

    return resultado;
    
}

const texto = "eeisieeiiieaaiiie";

const frequencias = contarFrequencia(texto);
const arvore = montarArvore(frequencias);
const codigos = gerarCodigos(arvore)
const texto_compactado = compactar(texto, codigos);
const texto_descompactado = descompactar(texto_compactado, arvore);

console.log("Texto original:", texto);
console.log("Frequências:", frequencias);
console.log("Códigos:", codigos);
console.log("Compactado:", texto_compactado);
console.log("Descompactado:", texto_descompactado);
