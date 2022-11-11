Desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Foi executado em uma aba do navegador, clicando com boatao direito do mouse, indo em inspecionar/console


const nome = prompt("Qual o seu nome?");
const idade = prompt("Quantos ans voce tem?");
const linguagem = prompt("Qual a linguagem voce esta estudando?");
const msg = `"Ola ${nome}, voce tem ${idade} anos e ja esta aprendendo ${linguagem}!"`;

alert(msg);
