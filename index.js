const carroPrimeiro = prompt("Qual o nome do primeiro veículo? ");
const carroSegundo = prompt("Qual o nome do segundo veículo? ");
const velocidadePrimeiro = prompt("Qual a velocidade do veículo 1? ");
const velocidadeSegundo = prompt("Qual a velocidade do veículo 2? ");

alert(
  "O condutor apressadinho é...\n" +
    "\nCarro: " +
    carroPrimeiro +
    " " +
    carroSegundo +
    " " +
    "\nVelocidade: km" +
    (velocidadePrimeiro - velocidadeSegundo)
);
