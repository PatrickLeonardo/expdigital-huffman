# Algoritmo de Huffman em JavaScript

## Ideia principal do algoritmo de Huffman

O algoritmo de Huffman usa uma ideia simples:

> caracteres que aparecem mais vezes no texto recebem códigos menores; caracteres que aparecem menos vezes recebem códigos maiores.

Por exemplo, no texto:

~~~text
AAAAABBC
~~~

As frequências são:

| Caractere | Frequência |
| --------- | ---------: |
| A         |          5 |
| B         |          2 |
| C         |          1 |

Um possível código seria:

| Caractere | Código |
| --------- | ------ |
| A         | 0      |
| B         | 10     |
| C         | 11     |


Assim, o texto: AAAAABBC
poderia ser representado como: 00000101011

---

## Por que isso comprime?

Em uma codificação comum, cada caractere costuma ocupar uma quantidade fixa de bits.

No Huffman, os códigos têm tamanhos diferentes.

Exemplo:

| Caractere | Frequência | Código |
| --------- | ---------: | ------ |
| A         |       alta | curto  |
| B         |      média | médio  |
| C         |      baixa | maior  |

Isso faz com que o texto final use menos bits no total.

## Árvore de Huffman

O algoritmo constrói uma árvore binária.

Cada caractere começa como um nó da árvore.

Depois, o algoritmo repete o seguinte processo:

1. pega os dois nós com menor frequência;
2. junta os dois em um novo nó;
3. a frequência do novo nó é a soma das frequências dos dois;
4. coloca o novo nó de volta na lista;
5. repete até sobrar apenas um nó.

Esse nó final é a raiz da árvore de Huffman.

### Exemplo de construção

Texto: ABBCCCDDDD

Frequências:

| Caractere | Frequência |
| --------- | ---------: |
| A         |          1 |
| B         |          2 |
| C         |          3 |
| D         |          4 |

O algoritmo junta primeiro os menores:

A(1) + B(2) = AB(3)

Depois:

C(3) + AB(3) = ABC(6)

Depois:

D(4) + ABC(6) = ABCD(10)

A árvore final gera códigos diferentes para cada caractere.

Códigos prefix-free

Uma característica importante do Huffman é que seus códigos são livres de prefixo.

Isso significa que nenhum código é o início de outro código.

Exemplo válido:

A = 0
B = 10
C = 11

O código de A é 0, mas nenhum outro código começa com 0.

Isso permite decodificar sem separadores.

Exemplo:

01011

Pode ser lido como:

0 - 10 - 11 ou A - B - C

## Exemplo 

<img width="897" height="482" alt="image" src="https://github.com/user-attachments/assets/84cc5403-e4cb-402e-971a-d55bb2f5960d" />

Errata: considero o nó pai ( / ) como a junção de seus nós filhos (apenas filhos), no exemplo acima, ADEFBC ou A + D + E + F + B + C.
