export interface CardData {
  nome: string;
  text: string;
  sobre: string;
  nota: string;
  rating: number;
  nomefilme: string;
  sinopse: string;
  informacao: string;
  avaliacao: string;
  imagemUrl: string[];
}

export const cardsData: CardData[] = [
  {
    nome: "Capitão Marvel",
    text: "Carol Danvers, também conhecida como Capitã Marvel, é uma super-heroína da Marvel Comics.",
    sobre:
      "Caracteristicas: Superforça, Voo, Emissão de energia cósmica, Resistência sobre-humana, Agilidade aumentada e Capacidade de absorver energia",
    nota: "Avaliaçōes dos Fãs",
    rating: 4.5,
    nomefilme: "Capitã Marvel (2019)",
    sinopse:
      "Sinopse: Carol Danvers, uma ex-piloto, descobre seus poderes e se torna uma heroína ao impedir uma guerra intergaláctica.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Capitão América",
    text: "Steve Rogers, o Capitão América, é um super-herói da Marvel Comics que apareceu pela primeira vez em Captain America Comics #1, de 1941.",
    sobre:
      "Caracteristicas: Força aumentada (Soro do Super Soldado), Agilidade e reflexos melhorados, Habilidades de combate corpo a corpo, Mestre estrategista, Uso do escudo de Vibranium e Liderança inspiradora",
    nota: "Avaliaçōes dos Fãs",
    rating: 4.0,
    nomefilme: "Capitão América: O Primeiro Vingador (2011)",
    sinopse:
      "Sinopse: Steve Rogers se torna o super-soldado Capitão América e lidera a luta contra a Hydra durante a Segunda Guerra Mundial.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Homem de Ferro",
    text: "Tony Stark, também conhecido como Homem de Ferro, é um super-herói da Marvel Comics.",
    sobre:
      "Caracteristicas: Gênio inventor, Armaduras de alta tecnologia, Capacidades de voo (com a armadura), Armas avançadas (repulsores, mísseis), Inteligência artificial (J.A.R.V.I.S./F.R.I.D.A.Y.) e Recursos financeiros ilimitados",
    nota: "Avaliaçōes dos Fãs",
    rating: 2.5,
    nomefilme: "Homem de Ferro (2008)",
    sinopse:
      "Sinopse: Tony Stark, um gênio bilionário, cria uma armadura de alta tecnologia para se tornar o herói Homem de Ferro.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Hulk",
    text: "Hulk é um personagem de quadrinhos da Marvel Comics, criado por Stan Lee e Jack Kirby.",
    sobre:
      "Caracteristicas: Força sobre-humana, Regeneração rápida, Resistência a danos, Transformação induzida pela raiva, Inteligência científica (quando é Bruce Banner) e Durabilidade extrema",
    nota: "Avaliaçōes dos Fãs",
    rating: 3.5,
    nomefilme: "O Incrível Hulk (2008)",
    sinopse:
      "Sinopse: Bruce Banner se transforma no poderoso Hulk e tenta encontrar uma cura enquanto enfrenta o General Ross e o Abominável.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Wanda",
    text: "Wanda Maximoff, também conhecida como Feiticeira Escarlate, é uma personagem fictícia que aparece nas histórias em quadrinhos publicadas pela Marvel Comics.",
    sobre:
      "Caracteristicas: Manipulação da realidade, Magia do caos, Telecinesia, Telepatia, Projeção de energia e Alteração de probabilidades",
    nota: "Avaliaçōes dos Fãs",
    rating: 4.5,
    nomefilme: "WandaVision (2021)",
    sinopse:
      "Sinopse: Wanda Maximoff e Visão tentam viver uma vida suburbana perfeita, mas descobrem que a realidade é distorcida pelos poderes de Wanda.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Thanos",
    text: "Thanos é um supervilão fictício que aparece nas histórias em quadrinhos americanas publicadas pela Marvel Comics.",
    sobre:
      "Caracteristicas: Força titânica, Durabilidade imensa, Intelecto estratégico, Mestre em combate corpo a corpo, Uso das Joias do Infinito e Vontade indomável",
    nota: "Avaliaçōes dos Fãs",
    rating: 5.0,
    nomefilme: "Vingadores: Guerra Infinita (2018)",
    sinopse:
      "Sinopse: Thanos busca as Joias do Infinito para destruir metade do universo, e os Vingadores tentam impedi-lo.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Thor",
    text: "Thor é um personagem fictício que aparece nos quadrinhos americanos publicados pela Marvel Comics.",
    sobre:
      "Caracteristicas: Força divina, Controle do trovão e relâmpago, Voo (com o Mjolnir ou Stormbreaker), Durabilidade e resistência asgardiana, Longevidade aumentada, Mestre em combate com martelo",
    nota: "Avaliaçōes dos Fãs",
    rating: 1.0,

    nomefilme: "Thor (2011)",
    sinopse:
      "Sinopse: Thor é banido para a Terra e deve provar seu valor para recuperar seus poderes e salvar Asgard.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },

  {
    nome: "Homem-Aranha",
    text: "Homem-Aranha é um personagem fictício, um super-herói que aparece nas histórias em quadrinhos americanas publicadas pela Marvel Comics.",
    sobre:
      "Caracteristicas: Agilidade e reflexos aumentados, Força proporcionada a um aracnídeo, Sentido aranha (percepção de perigo), Capacidade de escalar paredes, Lançamento de teias (tecnologia própria) e Habilidades de combate acrobático",
    nota: "Avaliaçōes dos Fãs",
    rating: 2.5,

    nomefilme: "Homem-Aranha: De Volta ao Lar (2017)",
    sinopse:
      "Sinopse: Peter Parker, equilibrando a vida de estudante e herói, enfrenta o vilão Abutre com a ajuda de Tony Stark.",
    informacao: "Disponível para compra:",
    avaliacao: "Crítica",
    imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
  },
];
