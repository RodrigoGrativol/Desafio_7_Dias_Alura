Desafio

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.

Dê uma olhada nesse site para aprender mais sobre estruturas de repetição.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.

Você pode ler mais sobre a Math.random() nesse site.


const numeroAdivinhacao = Math.floor (Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for (let contador = 0; contador < 3; contador++){
    chute = prompt("Tente adivinhar o numero de 0 a 10:");
    if (chute == numeroAdivinhacao){
        alert(`Parabens, voce acertou! o numero era ${numeroAdivinhacao}. `);
        acertou = true;
        break;
    }

    alert ("Errado!");
     
}
if ("Acertou!"){
    alert(`Infelizmente voce nao acertou! o numero certo era ${numeroAdivinhacao}!`);
}