// Grupo 02: 
// Izabella Leite
// Monique Cristina
// J. Felipe S. Barbosa



// Variaveis para salvar as pontuações
let pontosJogadorMaquina = 0;
let pontosJogadorHumano = 0;
let resultado = 0;

// looping para o jogo se repetir
for (let index = 0; index < 3; index++) {

  // Solicitação do Jogador para escolher uma das opções
  // Atribuição na variavel "jogadorHumano" 
  let jogadorHumano = parseInt(prompt("Escolha a opção desejada: \n [1] Pedra | [2] Papel | [3] Tesoura"));

  // Definição de um numero aleatório
  let numeroAleatorio = parseInt(Math.random() * 3 + 1);

  // Atribuiu esse "random" à Variavel "JogadorMaquina"
  let jogadorMaquina = numeroAleatorio;


  // Lógica do Jogo
  if (jogadorHumano == jogadorMaquina) {
    alert("Ixe Empate! Jogue novamente")
  } else {
    switch (jogadorHumano) {

      case 1: // Eu escolho "Pedra"
        jogadorMaquina === 3 ?
          alert(`VOCÊ VEEENCEU !! Parabens !! \n Pedra [${jogadorHumano}] GANHA de Tesoura [${jogadorMaquina}]`, pontosJogadorHumano++, resultado++) :
          alert(`AAAAAH NÃO FOI DESSA VEZ, VOCE PERDEU ! \n  Papel [${jogadorMaquina}] GANHA de Pedra  [${jogadorHumano}]`, pontosJogadorMaquina++, resultado++);
        break;
      case 2: // Eu escolho "Papel"
        jogadorMaquina === 1 ?
          alert(`VOCÊ VEEENCEU !! Parabens !! \n Papel [${jogadorHumano}] GANHA de Pedra [${jogadorMaquina}]`, pontosJogadorHumano++, resultado++) :
          alert(`AAAAAH NÃO FOI DESSA VEZ, VOCE PERDEU ! \n  Tesoura [${jogadorMaquina}] GANHA de Papel  [${jogadorHumano}]`, pontosJogadorMaquina++, resultado++);
        break;
      case 3: // Eu escolho "tesoura"
        jogadorMaquina === 2 ?
          alert(`VOCÊ VEEENCEU !! Parabens !! \n Tesoura [${jogadorHumano}] GANHA de Papel [${jogadorMaquina}]`, pontosJogadorHumano++, resultado++) :
          alert(`AAAAAH NÃO FOI DESSA VEZ, VOCE PERDEU ! \n  Pedra [${jogadorMaquina}] GANHA de Tesoura  [${jogadorHumano}]`, pontosJogadorMaquina++, resultado++);
        break;
      default:
        alert("Desculpe, informe novamente sua opção: \n [1] Pedra | [2] Papel | [3] Tesoura ")
    }
  }

  alert(`Pontuação: \n  Humano ${pontosJogadorHumano} vs Máquina ${pontosJogadorMaquina}`)

  // Aqui mostra quem venceu a rodada 
  pontosJogadorHumano > pontosJogadorMaquina ?
    alert(`Você venceu a rodada! \n Humano ${pontosJogadorHumano} vs Máquina ${pontosJogadorMaquina}`) :
    pontosJogadorHumano == pontosJogadorMaquina ? alert("O jogo terminou empatado! Vamos novamente?") : alert("Você perdeu o jogo.!")
}