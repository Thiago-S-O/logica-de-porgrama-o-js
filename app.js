alert("Bem vindo ao jogo do número secreto");

let maxNumber = 30;

let secretNumber = parseInt((Math.random() * maxNumber) + 1); // gera némeros inteiros entre 1 e maxNumber

console.log(`o número secreto é ${secretNumber}`);

let choiceNumber;

let trying = 0;

while (secretNumber != choiceNumber) {
  choiceNumber = prompt(`Escolha um número de 1 a ${maxNumber}:`);
  trying++;
  let single = trying > 1 ? `Já foram ${trying} tentativas!` : `Já foi ${trying} tentativa!`;
  if (secretNumber > choiceNumber) {
    alert(`O número secreto é maior do que ${choiceNumber} \n ${single}`);
  } else if (secretNumber < choiceNumber) {
    alert(`O número secreto é menor do que ${choiceNumber} \n ${single}`);
  } else {
    alert(`Você acertou, o número é ${secretNumber}.`);
    break;
  }
}
