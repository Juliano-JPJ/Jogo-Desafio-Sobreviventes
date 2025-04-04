document.getElementById("escolhaEquipe").addEventListener("click", function () {
  let jogarNovamente = true;

  while (jogarNovamente) {
    let herois = ["", "", ""];
    let viloes = ["", "", ""];
    let forcaHerois = 0;
    let forcaViloes = 0;

    const opcoesHerois = [
      "Joel",
      "Ellie",
      "Tommy",
      "Marlene",
      "Dina",
      "Jesse",
      "Maria",
      "Lev",
      "Yara",
      "Abby"
    ];

    const opcoesHeroisLower = opcoesHerois.map((opcao) => opcao.toLowerCase());

    for (let i = 0; i < 3; i++) {
      let escolhaHeroi;
      do {
        escolhaHeroi = prompt(
          "Escolha o personagem " + (i + 1) + ":\n" + opcoesHerois.join(", ")
        );

        // Normaliza a escolha do usuário para minúsculas
        const escolhaHeroiLower = escolhaHeroi.toLowerCase();

        // Verifica se a escolha está nas opções disponíveis
        if (!opcoesHeroisLower.includes(escolhaHeroiLower)) {
          alert("Escolha inválida! Por favor, escolha um personagem da lista.");
        }
      } while (!opcoesHeroisLower.includes(escolhaHeroi.toLowerCase()));

      herois[i] = escolhaHeroi;
      forcaHerois += Math.floor(Math.random() * 10 + 1);
    }

    alert("Sua equipe: " + herois);

    for (let i = 0; i < 3; i++) {
      let indiceAleatorio = Math.floor(Math.random() * 11);
      let listaViloes = [
        "Militar",
        "Caçador",
        "Serafita",
        "Cascavél",
        "Lobo",
        "Corredor",
        "Espreitador",
        "Estalador",
        "Baiacu",
        "Trôpego",
        "Rei Rato"
      ];
      viloes[i] = listaViloes[indiceAleatorio];
      forcaViloes += Math.floor(Math.random() * 10 + 1);
    }

    alert("Equipe inimiga: " + viloes);

    if (forcaHerois > forcaViloes) {
      alert("Sua equipe venceu! Força da equipe: " + forcaHerois);
    } else if (forcaHerois < forcaViloes) {
      alert("Sua equipe foi derrotada! Força dos inimigos: " + forcaViloes);
    } else {
      alert("As duas equipes têm a mesma força, ninguém perdeu!");
    }

    // Pergunta se o usuário quer jogar novamente
    jogarNovamente = confirm("Você quer jogar novamente?");
  }
});