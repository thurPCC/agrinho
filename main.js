const perguntas = [
      {
        pergunta: "O que significa SIG?",
        opcoes: [
          "Sistema de Informação Geográfica",
          "Serviço Integrado Global",
          "Sistema Internacional de Gestão",
          "Software Inteligente Geológico"
        ],
        correta: 0
      },

      {
        pergunta: "Qual é uma aplicação do SIG na gestão ambiental?",
        opcoes: [
          "Controle de desmatamento",
          "Edição de vídeos",
          "Criação de jogos",
          "Produção musical"
        ],
        correta: 0
      },

      {
        pergunta: "O SIG auxilia principalmente em:",
        opcoes: [
          "Análise espacial",
          "Desenho artístico",
          "Streaming",
          "Jogos online"
        ],
        correta: 0
      }
    ];

    let indice = 0;
    let pontos = 0;

    const pergunta = document.getElementById("pergunta");
    const botoes = document.querySelectorAll(".opcao");
    const resultado = document.getElementById("resultado");
    const pontosTexto = document.getElementById("pontos");

    function carregarPergunta() {

      resultado.textContent = "";

      const atual = perguntas[indice];

      pergunta.textContent = atual.pergunta;

      botoes.forEach((botao, i) => {
        botao.textContent = atual.opcoes[i];

        botao.onclick = () => {
          verificarResposta(botao, i === atual.correta);
        };

        botao.disabled = false;
        botao.style.backgroundColor = "";
      });

    }

    function verificarResposta(botao, correta) {

      botoes.forEach(btn => btn.disabled = true);

      if(correta){
        resultado.textContent = "✅ Resposta correta!";
        resultado.style.color = "green";

        botao.style.backgroundColor = "#4CAF50";

        pontos++;
        pontosTexto.textContent = pontos;

      } else {

        resultado.textContent = "❌ Resposta errada!";
        resultado.style.color = "red";

        botao.style.backgroundColor = "#e53935";
      }

    }

    function proximaPergunta(){

      indice++;

      if(indice < perguntas.length){

        carregarPergunta();

      } else {

        document.querySelector(".quiz-box").innerHTML = `
          <h2>🎉 Quiz Finalizado!</h2>
          <p>Sua pontuação foi: ${pontos}/${perguntas.length}</p>
        `;
      }

    }

    carregarPergunta();