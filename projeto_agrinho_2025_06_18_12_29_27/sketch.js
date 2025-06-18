let perguntas = [
  "Qual o nome da plantação que vem o milho?",
  "O que é ultilizado para controle de pragas?",
  "Quando foi criado o projeto agrinho?"
];
let respostas = ["milharal", "veneno", "1995"];
let contador = 0;
let pontuacao = 0;
let inputResposta;
let botaoEnviar;
let botaoIniciar;
let estado = "intro"; // estados: intro, quiz, fim

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER);
  textSize(16);

  // Botão de iniciar
  botaoIniciar = createButton("Iniciar Quiz");
  botaoIniciar.position(150, 200);
  botaoIniciar.mousePressed(comecarQuiz);

  // Input e botão de enviar, mas começam escondidos
  inputResposta = createInput();
  inputResposta.position(50, 50);
  inputResposta.hide();

  botaoEnviar = createButton("Enviar");
  botaoEnviar.position(50, 80);
  botaoEnviar.mousePressed(verificarResposta);
  botaoEnviar.hide();
}

function draw() {
  background("#795548");
  fill(255);

  if (estado === "intro") {
    textSize(20);
    text("Bem-vindo ao Quiz do Agrinho!", width / 2, 100);
    textSize(14);
    text("Teste seus conhecimentos sobre agricultura!", width / 2, 140);
  } else if (estado === "quiz") {
    text("Pergunta: " + perguntas[contador], 200, 30);
    text("Pontuação: " + pontuacao, 200, 270);
  } else if (estado === "fim") {
    inputResposta.hide();
    botaoEnviar.hide();

    if (pontuacao === perguntas.length) {
      background("green");
      textSize(24);
      text("Parabéns! Você venceu!", width / 2, height / 2);
    } else {
      background("red");
      textSize(24);
      text("Você perdeu! Tente novamente!", width / 2, height / 2);
    }
  }
}

function comecarQuiz() {
  estado = "quiz";
  botaoIniciar.hide();
  inputResposta.show();
  botaoEnviar.show();
}

function verificarResposta() {
  let respostaUsuario = inputResposta.value().toLowerCase();
  if (respostaUsuario === respostas[contador].toLowerCase()) {
    pontuacao++;
  }
  contador++;
  inputResposta.value("");

  if (contador >= perguntas.length) {
    estado = "fim";
  }
}
