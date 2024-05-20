Marvel Heroes Site
Introdução
Bem-vindo ao Marvel Heroes Site, um portal dedicado aos fãs da Marvel onde você pode explorar informações detalhadas sobre seus heróis favoritos, filmes e HQs. Este site oferece uma experiência interativa onde os usuários podem se registrar, fazer login e acessar uma vasta coleção de cards de personagens da Marvel.
Este projeto foi desenvolvido utilizando Next.js e Styled Components para criar uma aplicação web moderna e estilizada.
Funcionalidades Principais

- Login e Registro de Usuário: Os usuários podem se registrar e criar uma conta. Se for a primeira vez no site, é necessário criar um login. Após a criação da conta, os usuários podem fazer login e acessar o conteúdo exclusivo.
- Cards dos Heróis da Marvel: Acesso a uma coleção de cards detalhados dos heróis da Marvel, contendo informações sobre personagens, filmes e HQs.
- Informações Detalhadas: Cada card fornece informações detalhadas sobre os personagens, incluindo suas histórias, poderes, aparições em filmes e HQs.
  Instalação e Configuração
  Requisitos de Sistema
  Antes de começar, certifique-se de ter as seguintes ferramentas instaladas no seu sistema:
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node) ou yarn
  Passos de Instalação

1. Clone o RepositórioClone o repositório do projeto para o seu ambiente local:
   git clone https://github.com/MAGAIVERH/marvel.git
   cd marvel

2. Instale as Dependências
   Use npm ou yarn para instalar as dependências do projeto listadas no arquivo package.json:

npm install

# ou

yarn install

3. Executar o Projeto em Ambiente de Desenvolvimento
   Inicie o servidor de desenvolvimento do Next.js:

npm run dev

# ou

yarn dev

O projeto estará disponível em http://localhost:3000.Estrutura de Arquivos
Aqui está a estrutura básica de arquivos do projeto:

marvel/
├── public/
│ └── fonts/
│ ├── MarvelRegular-Dj83.ttf
│ └── Axiforma/
│ ├── Kastelov - Axiforma Black.otf
│ └── Kastelov - Axiforma Bold.otf
├── app/
│ ├── components/
│ ├── pages/
│ ├── styles/
│ └── utils/
├── .eslintrc.json
├── next.config.js
├── package.json
└── README.mdDependências
O projeto utiliza as seguintes dependências:

- framer-motion: Para animações e transições.
- next: Framework React para desenvolvimento de aplicações web.
- react e react-dom: Biblioteca React e seu módulo DOM.
- react-icons: Ícones para componentes React.
- react-slick: Componente de carrossel para React.
- shadcn-ui: Biblioteca de componentes de interface.
- styled-components: Biblioteca para estilização de componentes.
- uuid: Geração de UUIDs.
  E as seguintes dependências de desenvolvimento:
- @types/node, @types/react, @types/react-dom, @types/react-slick, @types/uuid: Tipos para TypeScript.
- eslint: Ferramenta de linting para JavaScript/TypeScript.
- eslint-config-next: Configurações de ESLint para Next.js.
- typescript: Suporte a TypeScript.

Componente TelaInicial
Descrição
O componente TelaInicial é responsável pela tela inicial do site, que inclui a apresentação da logo da Marvel, um formulário de login, e um formulário de cadastro. Ele utiliza animações para transições suaves entre os diferentes estados da tela. As informações de cadastro são armazenadas no localStorage para permitir que o usuário faça login imediatamente após o cadastro.
Estrutura
O componente está estruturado da seguinte forma:

- Container: Componente principal que envolve toda a tela inicial.
- Rectangle: Contém a logo da Marvel e realiza a animação de transição inicial.
- ImageContainer: Contém a imagem de fundo.
- Form: Utilizado para exibir os formulários de login e cadastro.
- SegundoForm: Contém os campos de entrada e o botão para o formulário de cadastro.
- RememberMeContainer: Contém a opção "Lembrar-me" e o link "Esqueci minha senha".
  Estados
  O componente gerencia vários estados para controlar as animações e a exibição dos formulários:
- showSplit: Controla a animação inicial de divisão da tela.
- showMoveUp: Controla a animação de movimentação para cima.
- showForm: Controla a exibição do formulário de login.
- showSignUpForm: Controla a exibição do formulário de cadastro.
- username e password: Controlam os valores dos campos de entrada de nome de usuário e senha.
- showSuccessMessage: Controla a exibição de uma mensagem de sucesso após o cadastro.
  Lógica
- useEffect: Utilizado para iniciar as animações quando o componente é montado.
- handleSignUpLinkClick: Oculta o formulário de login e exibe o formulário de cadastro.
- handleBackToLoginClick: Oculta o formulário de cadastro e exibe o formulário de login.
- handleSignUpSuccess: Define a mensagem de sucesso e retorna ao formulário de login.
- handleCreateAccount: Lida com a lógica de criação de conta e armazena os dados no localStorage para permitir login imediato.

Código
import React, { useEffect, useState } from "react";
import {
Container,
DuasCores,
ImageContainer,
Rectangle,
RememberMeContainer,
Form,
SegundoForm,
} from "../styles/tela-inicial01";

import Image from "next/image";
import CadastroForm from "./cadastro";
import Link from "next/link";

const TelaInicial: React.FC<{
onSignUpClick: () => void;
showForm: boolean;
}> = ({ onSignUpClick }) => {
const [showSplit, setShowSplit] = useState(false);
const [showMoveUp, setShowMoveUp] = useState(false);
const [showForm, setShowForm] = useState(false);
const [showSignUpForm, setShowSignUpForm] = useState(false);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [showSuccessMessage, setShowSuccessMessage] = useState(false);

useEffect(() => {
const timer = setTimeout(() => {
setShowSplit(true);
setTimeout(() => {
setShowMoveUp(true);
setShowForm(true);
}, 2000);
}, 200);

    return () => clearTimeout(timer);

}, []);

const handleSignUpLinkClick = () => {
setShowForm(false);
setShowSignUpForm(true);
};

const handleBackToLoginClick = () => {
setShowSignUpForm(false);
setShowForm(true);
};

const handleSignUpSuccess = (success: boolean) => {
setShowSuccessMessage(success);
handleBackToLoginClick();
};

const handleCreateAccount = () => {
const userData = {
username: username,
password: password,
};

    return (
      <CadastroForm
        username={userData.username}
        password={userData.password}
        onSignInClick={handleBackToLoginClick}
        setShowSuccessMessage={setShowSuccessMessage}
        onSignUpSuccess={handleSignUpSuccess}
      />
    );

};

return (
<Container>
<Rectangle
style={{
          transform: `translateX(${showSplit ? "-100%" : "0"}) translateY(${
            showMoveUp ? "-200%" : "0"
          })`,
          transition: "transform 2s ease-in-out",
        }} >
MARVEL
</Rectangle>
{showSplit && (
<ImageContainer style={{ transition: "transform 1s ease-in-out" }}>
<Image src="/capa.png" alt="Imagem" layout="fill" objectFit="cover" />
</ImageContainer>
)}

      {/* Renderize o segundo formulário se showSignUpForm for verdadeiro */}
      {showSignUpForm && (
        <Form
          showForm={showSignUpForm}
          key="signUpForm"
          style={{
            transform: `translateX(${showSignUpForm ? "0" : "100%"})`,
            opacity: showSignUpForm ? 1 : 0,
            transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
          }}
        >
          <SegundoForm>
            <h1>Criar conta</h1>
            <p>Preencha os campos abaixo:</p>
            <input
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Atualiza o estado do nome de usuário
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleCreateAccount}>
              Criar conta
            </button>

            <DuasCores>
              <p>
                Já tem uma conta?{" "}
                <span onClick={handleBackToLoginClick}>
                  Voltar para o login
                </span>
              </p>
            </DuasCores>
          </SegundoForm>
        </Form>
      )}

      {/* Renderize o primeiro formulário */}
      {showForm && (
        <Form
          showForm={showForm}
          key="form"
          style={{
            transform: `translateX(${showForm ? "0" : "100%"})`,
            opacity: showForm ? 1 : 0,
            transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
          }}
        >
          <div>
            <h1>Bem-vindo de volta!</h1>
            <p>Acesse sua conta:</p>
            <input type="text" placeholder="Usuário" />
            <input type="password" placeholder="Senha" />
            <div style={{ marginTop: "10px" }}>
              <RememberMeContainer>
                <input
                  type="checkbox"
                  id="rememberMe"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="rememberMe">Lembrar-me</label>
                <p onClick={handleSignUpLinkClick}>Esqueci minha senha</p>
              </RememberMeContainer>
            </div>
            <Link href="/personagens">
              <button type="submit">Entrar</button>
            </Link>

            <DuasCores>
              <p>
                <a style={{ cursor: "pointer" }}>
                  Ainda não tem login?
                  <span onClick={handleSignUpLinkClick}> Cadastre-se</span>
                </a>
              </p>
            </DuasCores>
          </div>
        </Form>
      )}
    </Container>

);
};

export default TelaInicial;

Uso de localStorage
Ao criar uma nova conta, as informações de cadastro (nome de usuário e senha) são armazenadas no localStorage. Isso permite que o usuário faça login imediatamente após o cadastro sem a necessidade de um backend.

Componente QuadroGeral
Descrição
O componente QuadroGeral é responsável pela exibição de um carrossel de cards de personagens, onde cada card exibe informações básicas sobre o personagem. Quando um card é clicado, uma sobreposição com mais detalhes do personagem é exibida. Este componente inclui os botões para navegação no carrossel, as animações de transição, e a exibição das avaliações em estrelas.
Estrutura
O componente está estruturado da seguinte forma:

- CardsWrapper: Envolve todo o carrossel de cards.
- ContainerPrincipal: Contém o carrossel e os botões de navegação.
- ArrowButton: Botões para navegação (esquerda e direita) no carrossel.
- Carrosel: Contém os cards dos personagens.
- Fotos: Contém cada card individual.
- InnerWithoutOverlay: Envolve cada card e sua respectiva sobreposição de detalhes.
- CardContainer: Contém o conteúdo do card (nome, texto e link de detalhes).
- TextContainer: Contém o nome do personagem, um breve texto e o link para ver mais detalhes.
- DetailsOverlay: Sobreposição que exibe os detalhes adicionais do personagem.
- SideOverlay: Contém a sobreposição dos detalhes e ajusta a posição dependendo se é o último card visível.
- CloseButton: Botão para fechar a sobreposição de detalhes.
- RatingStars: Componente que exibe as estrelas de avaliação.
  Estados
  O componente gerencia vários estados para controlar o carrossel e a exibição dos detalhes dos cards:
- scrollIndex: Índice que controla a posição de rolagem do carrossel.
- detailsVisible: Booleano que controla a visibilidade da sobreposição de detalhes.
- selectedIndex: Índice do card selecionado para exibir os detalhes.
  Lógica
- handleScroll: Função para rolar o carrossel para a esquerda ou direita.
- handleDetailsClick: Função para exibir a sobreposição de detalhes ao clicar em "Ver detalhes".
- handleClose: Função para fechar a sobreposição de detalhes.
  Avaliação com Estrelas
  Cada card exibe uma nota e uma avaliação em estrelas. O componente RatingStars é utilizado para exibir as estrelas de avaliação com base na nota do personagem.

Código
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
ContainerPrincipal,
Carrosel,
Fotos,
InnerWithoutOverlay,
} from "../styles/style-personagens";
import {
CardContainer,
TextContainer,
DetailsLink,
Text,
Name,
CloseButton,
DetailsOverlay,
SideOverlay,
ArrowButton,
CloseIcon,
LeftArrow,
RightArrow,
Title,
Nota,
Text2,
CardsWrapper,
} from "../styles/info-card-personagens";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { cardsData } from "../cards.data";

import capitaoMarvel from "/public/image-personagens/capita-marvel.png";
import capitaoAmerica from "/public/image-personagens/capitao-america.png";
import homemFerro from "/public/image-personagens/homem-ferro.png";
import hulk from "/public/image-personagens/hulk.png";
import spider from "/public/image-personagens/spider.png";
import thor from "/public/image-personagens/thor.png";
import tranos from "/public/image-personagens/tranos.png";
import wanda from "/public/image-personagens/wanda.png";
import RatingStars from "../\_components/ratingStars";

const images = [
capitaoMarvel,
capitaoAmerica,
homemFerro,
hulk,
wanda,
tranos,
thor,
spider,
];

const QuadroGeral = () => {
const [scrollIndex, setScrollIndex] = useState(0);
const [detailsVisible, setDetailsVisible] = useState(false);
const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const handleScroll = (direction: "left" | "right") => {
if (direction === "left") {
setScrollIndex((prevIndex) => Math.max(0, prevIndex - 1));
} else if (direction === "right") {
setScrollIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 3));
}
};

const handleDetailsClick = (index: number) => {
setSelectedIndex(index);
setDetailsVisible(true);
};

const handleClose = () => {
setSelectedIndex(null);
setDetailsVisible(false);
};

const lastIndex = scrollIndex + 2;

return (
<CardsWrapper>
<ContainerPrincipal>
<ArrowButton isVisible={scrollIndex > 0}>
{scrollIndex > 0 && (
<LeftArrow as={motion.div} onClick={() => handleScroll("left")}>
<FaArrowLeft />
</LeftArrow>
)}
</ArrowButton>
<Carrosel>
<Fotos>
{images.slice(scrollIndex, scrollIndex + 3).map((image, index) => {
const isSelected =
detailsVisible && selectedIndex === scrollIndex + index;
const isLast = scrollIndex + index === lastIndex;

              return (
                <InnerWithoutOverlay key={index}>
                  <motion.div>
                    <Image src={image} alt="Fotos dos Personagens" />
                    <CardContainer>
                      {!isSelected && (
                        <TextContainer>
                          <Name>{cardsData[scrollIndex + index].nome}</Name>
                          <Text>{cardsData[scrollIndex + index].text}</Text>
                          <DetailsLink
                            onClick={() =>
                              handleDetailsClick(scrollIndex + index)
                            }
                          >
                            Ver detalhes
                          </DetailsLink>
                        </TextContainer>
                      )}
                    </CardContainer>
                  </motion.div>
                  {!isSelected && <div className="overlay"></div>}
                  {isSelected && (
                    <SideOverlay isLast={isLast}>
                      <DetailsOverlay>
                        <Title>{cardsData[scrollIndex + index].nome}</Title>
                        <Text2>{cardsData[scrollIndex + index].sobre}</Text2>
                        <Nota>{cardsData[scrollIndex + index].nota}</Nota>
                        <RatingStars
                          rating={cardsData[scrollIndex + index].rating}
                        />{" "}
                        {/* Adicione as estrelas de avaliação aqui */}
                        <CloseButton onClick={handleClose}>
                          <CloseIcon>X</CloseIcon>
                        </CloseButton>
                      </DetailsOverlay>
                    </SideOverlay>
                  )}
                </InnerWithoutOverlay>
              );
            })}
          </Fotos>
        </Carrosel>
        <ArrowButton isVisible={scrollIndex < images.length - 3}>
          {scrollIndex < images.length - 3 && (
            <RightArrow as={motion.div} onClick={() => handleScroll("right")}>
              <FaArrowRight />
            </RightArrow>
          )}
        </ArrowButton>
      </ContainerPrincipal>
    </CardsWrapper>

);
};

export default QuadroGeral;

Componente Menu
O componente Menu é responsável pela navegação principal do site, exibindo links para diferentes seções como Personagens, Filmes e HQs. Ele também inclui um ícone de menu para dispositivos móveis, o nome do usuário logado e um botão de logout.
Código do Componente
"use client";

import Image from "next/image";
import {
ImageContainer,
Logo,
Logout,
MenuItem,
MenuItems,
MenuWrapper,
SandwichIcon,
UserCircle,
} from "../styles/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Menu = () => {
const [userData, setUserData] = useState<{ username: string }>({
username: "",
});
const [currentPage, setCurrentPage] = useState("");

const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserData(userData);
    }

    if (typeof window !== "undefined") {
      setCurrentPage(window.location.pathname);
    }

}, []);

const toggleMenu = () => {
setIsOpen(!isOpen);
};

return (
<>
<MenuWrapper>
<SandwichIcon onClick={toggleMenu}>
<FaBars />
</SandwichIcon>
<Logo>MARVEL</Logo>
<MenuItems isOpen={isOpen}>
<Link href="/personagens" passHref>
<MenuItem
className={currentPage === "/personagens" ? "active" : ""} >
Personagens
</MenuItem>
</Link>

          <Link href="/filmes" passHref>
            <MenuItem className={currentPage === "/filmes" ? "active" : ""}>
              Filmes
            </MenuItem>
          </Link>

          <Link href="/hqs" passHref>
            <MenuItem className={currentPage === "/hqs" ? "active" : ""}>
              Hqs
            </MenuItem>
          </Link>
        </MenuItems>
        <UserCircle>
          {userData?.username && (
            <span>{userData.username.charAt(0).toUpperCase()}</span>
          )}
        </UserCircle>
        <Logout href="/">Sair</Logout>
      </MenuWrapper>

      <ImageContainer>
        <Image src="/capa.png" alt="Imagem" objectFit="cover" layout="fill" />
      </ImageContainer>
    </>

);
};

export default Menu;

Props
O componente Menu não aceita props diretamente. Ele utiliza o estado interno e hooks do React para gerenciar o comportamento.
Estado

- userData: Armazena o nome de usuário obtido do localStorage.
- currentPage: Armazena o caminho da página atual para definir a classe ativa nos itens do menu.
- isOpen: Gerencia o estado de abertura do menu para dispositivos móveis.
  Funções
- toggleMenu: Alterna o estado de isOpen, abrindo ou fechando o menu móvel.
  Hooks
- useEffect: Carrega os dados do usuário do localStorage e define a página atual ao montar o componente.
  Estilos
  Os estilos são gerenciados usando styled-components. Aqui estão os principais elementos estilizados:
- MenuWrapper: Contém todo o menu.
- SandwichIcon: Ícone do menu para dispositivos móveis.
- Logo: Exibe o logotipo "MARVEL".
- MenuItems: Contém os itens do menu.
- MenuItem: Estiliza cada item do menu.
- UserCircle: Exibe a inicial do usuário logado.
- Logout: Link para sair da aplicação.
- ImageContainer: Contém a imagem de fundo.
  Funcionalidade
- Responsividade: Inclui um ícone de menu para dispositivos móveis que abre e fecha o menu de navegação.
- Estado Ativo do Menu: O item do menu correspondente à página atual é destacado.
- Informações do Usuário: Exibe a inicial do nome de usuário logado.
- Logout: Inclui um link para sair da aplicação.

Exemplo de Uso
import Menu from "../components/Menu";

const MainPage = () => {
return (
<>
<Menu />
{/_ Outros componentes da página _/}
</>
);
};

export default MainPage;

Considerações Finais

- Certifique-se de que o localStorage esteja disponível antes de tentar acessar seus dados para evitar erros em ambientes server-side.
- O ícone de menu para dispositivos móveis melhora a usabilidade em telas menores.
- A navegação é gerenciada usando o componente Link do Next.js para navegação rápida e sem recarregamento de página.

Estrutura de Dados dos Cards
Os dados dos cards são armazenados em um arquivo TypeScript (cards.data.ts) que define uma interface CardData e exporta um array cardsData contendo os dados de cada personagem. Esses dados são utilizados para renderizar os cards na aplicação.
Interface CardData
A interface CardData define a estrutura dos dados de cada card:

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

Dados dos Cards
Os dados de cada personagem são armazenados em um array cardsData. Aqui estão os dados de exemplo para cada personagem:

export const cardsData: CardData[] = [
{
nome: "Capitão Marvel",
text: "Carol Danvers, também conhecida como Capitã Marvel, é uma super-heroína da Marvel Comics.",
sobre: "Caracteristicas: Superforça, Voo, Emissão de energia cósmica, Resistência sobre-humana, Agilidade aumentada e Capacidade de absorver energia",
nota: "Avaliaçōes dos Fãs",
rating: 4.5,
nomefilme: "Capitã Marvel (2019)",
sinopse: "Sinopse: Carol Danvers, uma ex-piloto, descobre seus poderes e se torna uma heroína ao impedir uma guerra intergaláctica.",
informacao: "Disponível para compra:",
avaliacao: "Crítica",
imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
},
{
nome: "Capitão América",
text: "Steve Rogers, o Capitão América, é um super-herói da Marvel Comics que apareceu pela primeira vez em Captain America Comics #1, de 1941.",
sobre: "Caracteristicas: Força aumentada (Soro do Super Soldado), Agilidade e reflexos melhorados, Habilidades de combate corpo a corpo, Mestre estrategista, Uso do escudo de Vibranium e Liderança inspiradora",
nota: "Avaliaçōes dos Fãs",
rating: 4.0,
nomefilme: "Capitão América: O Primeiro Vingador (2011)",
sinopse: "Sinopse: Steve Rogers se torna o super-soldado Capitão América e lidera a luta contra a Hydra durante a Segunda Guerra Mundial.",
informacao: "Disponível para compra:",
avaliacao: "Crítica",
imagemUrl: ["../public/sky.png", "../.public/amazon.jpeg"],
},
{
nome: "Homem de Ferro",
text: "Tony Stark, também conhecido como Homem de Ferro, é um super-herói da Marvel Comics.",
sobre: "Caracteristicas: Gênio inventor, Armaduras de alta tecnologia, Capacidades de voo (com a armadura), Armas avançadas (repulsores, mísseis), Inteligência artificial (J.A.R.V.I.S./F.R.I.D.A.Y.) e Recursos financeiros ilimitados",
nota: "Avaliaçōes dos Fãs",
rating: 2.5,
nomefilme: "Homem de Ferro (2008)",
sinopse: "Sinopse: Tony Stark, um gênio bilionário, cria uma armadura de alta tecnologia para se tornar o herói Homem de Ferro.",
informacao: "Disponível para compra:",
avaliacao: "Crítica",
imagemUrl: ["../public/sky.png", "../public/amazon.jpeg"],
},
// ... continue com os demais personagens
];

Utilização dos Dados
Os dados dos cards são importados e utilizados nos componentes para renderizar as informações de cada personagem. Por exemplo, no componente QuadroGeral:
import { cardsData } from "../cards.data";

// Uso dos dados no componente
const QuadroGeral = () => {
// Lógica do componente

return (
<CardsWrapper>
<ContainerPrincipal>
{/_ Renderização dos cards _/}
{cardsData.map((card, index) => (
<Card key={index}>
<Image src={card.imagemUrl[0]} alt={card.nome} />
<CardContainer>
<TextContainer>
<Name>{card.nome}</Name>
<Text>{card.text}</Text>
<DetailsLink onClick={() => handleDetailsClick(index)}>
Ver detalhes
</DetailsLink>
</TextContainer>
</CardContainer>
</Card>
))}
</ContainerPrincipal>
</CardsWrapper>
);
};

Utilização dos Dados
Os dados dos cards são importados e utilizados nos componentes para renderizar as informações de cada personagem. Por exemplo, no componente QuadroGeral:

import { cardsData } from "../cards.data";

// Uso dos dados no componente
const QuadroGeral = () => {
// Lógica do componente

return (
<CardsWrapper>
<ContainerPrincipal>
{/_ Renderização dos cards _/}
{cardsData.map((card, index) => (
<Card key={index}>
<Image src={card.imagemUrl[0]} alt={card.nome} />
<CardContainer>
<TextContainer>
<Name>{card.nome}</Name>
<Text>{card.text}</Text>
<DetailsLink onClick={() => handleDetailsClick(index)}>
Ver detalhes
</DetailsLink>
</TextContainer>
</CardContainer>
</Card>
))}
</ContainerPrincipal>
</CardsWrapper>
);
};Considerações Finais

- Organização dos Dados: Centralizar os dados dos cards em um único arquivo facilita a manutenção e atualização das informações.
- Tipagem: Utilizar TypeScript para definir a interface dos dados garante consistência e ajuda a evitar erros durante o desenvolvimento.
- Flexibilidade: A estrutura dos dados permite adicionar facilmente novas propriedades ou personagens conforme necessário.

Documentação da Estilização da Tela Inicial
Esta documentação descreve a estilização da tela inicial do projeto utilizando o pacote styled-components para aplicar CSS-in-JS. A seguir, são detalhados os componentes estilizados e as animações utilizadas.
Animações
slideInAnimation
Animação que faz um elemento deslizar da direita para a esquerda.

const slideInAnimation = keyframes`  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }`;

slideInFromRight
Similar ao slideInAnimation, faz o elemento deslizar da direita para a esquerda.

const slideInFromRight = keyframes`  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }`;

slideUpAndOut
Animação que faz um elemento deslizar para cima e desaparecer.
const slideUpAndOut = keyframes`  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-230%);
  }`;

slideInFromLeft
Animação que faz um elemento deslizar da esquerda para a direita.
javascript

const slideInFromLeft = keyframes`  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }`;

slideFromLeftAnimation
Animação que faz um elemento deslizar da esquerda com opacidade variável.
const slideFromLeftAnimation = keyframes`  from {
    opacity: 0;
    transform: translateX(-200%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%);
  }`;

slideOutAnimation
Animação que faz um elemento deslizar para a esquerda e desaparecer.
const slideOutAnimation = keyframes`  from {
    opacity: 1;
    transform: translateX(-50%);
  }
  to {
    opacity: 0;
    transform: translateX(-200%);
  }`;

slideUpAnimation
Animação que faz um elemento deslizar de baixo para cima.
javascript

const slideUpAnimation = keyframes`  from {
    transform: translateY(400%);
  }
  to {
    transform: translateY(0%);
  }`;

Componentes Estilizados
Container
Contêiner principal da tela inicial, centralizando seu conteúdo.
export const Container = styled.div`
position: relative;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
overflow: hidden;
}
`;

Rectangle
Retângulo central com estilização responsiva e animações aplicadas em dispositivos móveis.
export const Rectangle = styled.div`
position: relative;
width: 372px;
height: 106px;
background-color: rgb(255, 0, 0);
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 64px;
transition: transform 2s ease;
margin-left: auto;
margin-right: auto;

@media (max-width: 768px) {
width: 80%;
height: 80px;
font-size: 48px;
animation: ${slideInFromRight} 2s ease forwards,
${slideUpAndOut} 2s 2s ease forwards;
margin-top: -80px;
}
`;

ImageContainer
Contêiner para imagens, com animação de deslizar da direita para a esquerda, ocultado em dispositivos móveis.
export const ImageContainer = styled.div`
position: absolute;
top: 0;
right: 0;
width: 50%;
height: 100%;
overflow: hidden;
animation: ${slideInAnimation} 2s ease forwards;

@media (max-width: 768px) {
display: none;
}

&::after {
content: "";
position: absolute;
top: 0;
right: 0;
width: 100%;
height: 100%;
background: linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}
`;

Form
Formulário estilizado, com animações condicionais baseadas na prop showForm.
export const Form = styled.form<FormProps>`
position: absolute;
top: 35%;
left: ${({ showForm }) => (showForm ? "24%" : "50%")};
transform: translate(50%, -50%);
padding: 20px;
border-radius: 10px;
animation: ${({ showForm }) =>
showForm ? slideFromLeftAnimation : slideOutAnimation}
5s forwards;

@media (max-width: 768px) {
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 380px;
margin-top: -20vh;

    h1 {
      text-align: center;
    }

}

h1 {
color: #d32f2f;
margin-bottom: 8px;
}

p {
margin-left: 10px;
color: #666;
margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
width: 100%;
height: 50px;
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;
outline: none;
border: none;
border-radius: 25px;
color: black;
background-color: white;
}

input[type="checkbox"] {
margin-right: 5px;
}

label {
color: #666;
}

button {
width: 100%;
height: 50px;
background-color: #d32f2f;
color: #fff;
border: none;
font-size: 22px;
padding: 10px 20px;
margin-top: 10px;
margin-bottom: 15px;
border-radius: 25px;
cursor: pointer;
}

.forgot-password a {
color: #d32f2f;
text-decoration: none;
border-bottom: 1px solid #d32f2f;
}

.register a {
color: #d32f2f;
text-decoration: none;
}
`;

RememberMeContainer
Contêiner para a opção "Lembrar-me".
export const RememberMeContainer = styled.div`
display: flex;
align-items: center;
margin-left: 10px;
font-size: 14px;

p {
margin-left: 70px;
margin-top: 5px;
color: #666;
border-bottom: 1px solid red;
cursor: pointer;
}
`;

DuasCores
Contêiner que aplica estilos diferenciados em elementos de texto.
export const DuasCores = styled.div`
display: flex;
align-items: center;
justify-content: center;

p {
color: #666;
text-decoration: none;
}

span {
color: #d32f2f;
}
`;

SegundoForm
Segundo formulário estilizado.
export const SegundoForm = styled.div`
width: 330px;

h1 {
text-align: center;
color: #d32f2f;
margin-bottom: 8px;
}

p {
margin-left: 10px;
color: #666;
margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
width: 100%;
height: 50px;
padding: 10px;
margin-top: 10px;
margin-bottom: 10px;
outline: none;
border: none;
border-radius: 25px;
color: black;
background-color: white;
}

button {
width: 100%;
height: 50px;
background-color: #d32f2f;
color: #fff;
border: none;
font-size: 22px;
padding: 10px 20px;
margin-top: 10px;
margin-bottom: 15px;
border-radius: 25px;
cursor: pointer;
}
`;

Considerações Finais
A estilização da tela inicial foi cuidadosamente projetada para garantir uma experiência de usuário fluida e responsiva. As animações adicionam uma camada de interatividade e ajudam a guiar o usuário durante a navegação. A utilização do styled-components permite que a manutenção e expansão do estilos.

Estilização do Menu
Esta documentação detalha a estilização do menu do projeto utilizando styled-components para aplicar CSS-in-JS. A seguir, estão descritos os componentes estilizados do menu e suas propriedades.
Componentes Estilizados
MenuWrapper
Wrapper principal do menu, que define a estrutura básica e a estilização geral.
import styled from "styled-components";

export const MenuWrapper = styled.div`
display: flex;
text-align: center;
justify-content: space-between;
position: relative;
top: 0;
left: 0;
width: 100%;
height: 100%;
margin-top: 15px;
color: white;
padding: 15px;
box-sizing: border-box;
border-bottom: 2px solid red;

@media (max-width: 768px) {
flex-direction: row;
justify-content: space-between;
align-items: center;
}
`;

ImageContainer
Contêiner para imagens, com um gradiente aplicado na parte superior.
export const ImageContainer = styled.div`
width: 100%;
height: 88%;
overflow: hidden;
position: absolute;

&::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 250%;
height: 100%;
background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}
`;

Logo
Estilização do logo do menu, centralizado e com cor de fundo vermelha.
export const Logo = styled.div`
margin-bottom: 20px;
margin-left: 25px;
color: white;
background-color: red;
align-items: center;
justify-content: center;
height: 30px;
width: 140px;
font-size: 24px;
font-weight: bold;

@media (max-width: 768px) {
margin: 0;
}
`;

MenuItems
Contêiner para os itens do menu, com estilização para visualização em desktop e dispositivos móveis.
export const MenuItems = styled.ul<{ isOpen: boolean }>`
display: flex;
list-style-type: none;
padding: 0;
margin: 0;
margin-left: 200px;

@media (max-width: 768px) {
flex-direction: column;
position: absolute;
top: 72px;
right: 153px;
width: 60%;
background-color: rgba(0, 0, 0, 0.9);
transition: transform 0.3s ease-in-out;
transform: ${({ isOpen }) =>
isOpen ? "translateY(0)" : "translateY(-200%)"};
z-index: 1001;
}
`;

MenuItem
Estilização dos itens individuais do menu, com hover e estilo ativo.
export const MenuItem = styled.li`
font-size: 20px;
margin-bottom: 10px;
margin-left: 100px;
margin-right: 70px;
color: #666;

&:hover,
&.active {
color: #fff;
}

@media (max-width: 768px) {
margin: 20px 0;
}
`;

UserCircle
Estilização do ícone do usuário, com bordas arredondadas e centralizado.
export const UserCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 50px;
margin-right: 10px;
width: 40px;
height: 40px;
margin-top: -10px;
background-color: white;
border-radius: 50%;
cursor: pointer;

span {
color: black;
font-size: 20px;
}

@media (max-width: 768px) {
margin: 0;
margin-left: -5px;
}
`;

Logout
Estilização do link de logout, com cor de texto modificada no hover.
export const Logout = styled.a`
color: #666;
text-decoration: none;
cursor: pointer;
margin-right: 70px;
margin-left: -50px;

&:hover {
color: white;
}

@media (max-width: 768px) {
margin-top: 10px;
margin-right: 2px;
}
`;

SandwichIcon
Estilização do ícone de menu (sandwich icon) para dispositivos móveis.
export const SandwichIcon = styled.div`
display: none;
cursor: pointer;
font-size: 24px;

@media (max-width: 768px) {
margin-left: 20px;
display: block;
}
`;

Considerações Finais
A estilização do menu foi projetada para ser responsiva, garantindo uma experiência de usuário consistente tanto em dispositivos desktop quanto móveis. Utilizamos técnicas modernas de CSS-in-JS com styled-components para manter o código modular e fácil de manter.

Documentação da Estilização do Carrossel
Esta documentação descreve a estilização do carrossel utilizando styled-components e framer-motion para animações. A seguir, são apresentados os componentes estilizados e suas propriedades.
Componentes Estilizados
ContainerPrincipal
Container principal que define a área do carrossel, centralizado na tela.
import styled from "styled-components";

export const ContainerPrincipal = styled.div`
width: 100%;
max-width: 1050px;
margin: 0 auto;
min-height: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 150px;
overflow-y: hidden;

@media (max-width: 768px) {
margin-top: 70px;
}
`;

Carrosel
Wrapper para o carrossel, utilizando motion.div para animações com framer-motion.
import { motion } from "framer-motion";

export const Carrosel = styled(motion.div)`  cursor: grab;
  overflow: hidden;
  width: 100%;`;

InnerWithoutOverlay
Container interno do carrossel sem overlay, utilizado para agrupar os itens do carrossel.
export const InnerWithoutOverlay = styled(motion.div)`
position: relative;
display: flex;
flex-direction: column;
align-items: center;

.overlay {
content: "";
position: absolute;
border-radius: 30px;
bottom: 0;
left: 0;
margin-bottom: 3px;
width: 100%;
height: 50%;
background-color: rgba(255, 0, 0, 0.7);
z-index: 1;
}
`;

Fotos
Contêiner para as fotos dentro do carrossel, com estilização responsiva.
export const Fotos = styled(motion.div)`
display: flex;
gap: 35px;
overflow: hidden;
margin: 0 auto;
transition: transform 0.5s ease;
max-width: fit-content;

@media (max-width: 768px) {
margin-top: 60px;
align-items: center;
width: 300px;
justify-content: center;
}

@media (max-width: 768px) {
&:nth-child(n + 2) {
display: none;
}
}
`;
Considerações Finais
Os componentes estilizados para o carrossel foram desenvolvidos para proporcionar uma experiência de usuário fluida e responsiva. Utilizamos styled-components para modularizar a estilização e framer-motion para adicionar animações interativas. A abordagem responsiva garante que o carrossel se adapte a diferentes tamanhos de tela, mantendo a funcionalidade e a estética.
Este conjunto de componentes pode ser utilizado para criar um carrossel de imagens ou conteúdo que seja visualmente atraente e fácil de usar em diversos dispositivos.

Documentação da Estilização de Componentes de Cartão
Este documento descreve a estilização de componentes de cartão utilizando styled-components e framer-motion para animações. Os componentes foram desenvolvidos para criar uma interface de usuário interativa e responsiva.
Componentes Estilizados
CardContainer
Container principal que agrupa os elementos do cartão.
import styled from "styled-components";

export const CardContainer = styled.div`  display: flex;
  position: relative;`;

TextContainer
Container para o texto dentro do cartão, posicionado de forma absoluta.
export const TextContainer = styled.div`  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  text-align: center;
  padding: 10px;
  width: calc(100% - 20px);
  z-index: 2;`;

Name
Estilização para o nome exibido no cartão.
export const Name = styled.h3`  margin-bottom: 35px;
  text-align: center;`;

Text
Parágrafo de texto dentro do cartão.
export const Text = styled.p`  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;`;

Title
Título do cartão com tamanho de fonte maior.
export const Title = styled.p`  margin-bottom: 35px;
  text-align: center;
  font-size: 24px;`;

Text2
Outro parágrafo de texto dentro do cartão, com padding lateral.
javascript
export const Text2 = styled.p`  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;`;

Nota
Texto para exibir notas ou avaliações no cartão.
export const Nota = styled.p`  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;`;

NomeFilme
Nome do filme exibido no cartão.
export const NomeFilme = styled.p`  margin-bottom: 35px;
  text-align: center;
  font-size: 24px;`;

Sinopse
Sinopse do filme, com padding lateral.
export const Sinopse = styled.p`  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 30px;
  font-size: 14px;
  text-align: center;`;

Informacao
Informações adicionais no cartão.
export const Informacao = styled.p`  font-size: 14px;`;

Imagem
Container para a imagem do cartão.
export const Imagem = styled.div`  display: flex;
  padding-top: 10px;
  height: 60px;
  margin-bottom: 20px;
  gap: 10px;`;

Avaliacao
Texto de avaliação, posicionado no rodapé do cartão.
export const Avaliacao = styled.p`  padding-bottom: 30px;
  text-align: center;
  font-size: 20px;`;

DetailsLink
Link estilizado para detalhes adicionais.
export const DetailsLink = styled.a`  color: white;
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 0px;
  cursor: pointer;`;

ArrowButton
Botão de seta para navegação entre cartões, com animação de visibilidade.
import { motion } from "framer-motion";

export const ArrowButton = styled(motion.div)<{ isVisible: boolean }>`  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease, visibility 0.3s ease;`;

ArrowIcon
Ícone de seta com cor e tamanho definidos.
export const ArrowIcon = styled.div`  color: red;
  font-size: 30px;`;

export const LeftArrow = styled(ArrowIcon)`  cursor: pointer;`;

export const RightArrow = styled(ArrowIcon)`  cursor: pointer;`;

SideOverlay
Overlay lateral para navegação, ajustado para ser responsivo.
export const SideOverlay = styled.div<{ isLast: boolean }>`  position: absolute;
  top: 0;
  left: 100%;
  ${({ isLast }) => (isLast ?`right: 100%; left: auto;` : "")}
display: flex;
justify-content: center;
align-items: center;
z-index: 3;

@media (max-width: 768px) {
position: absolute;
top: -2px;
left: 0;
width: 100%;
height: 100%;
}
`;

DetailsOverlay
Overlay de detalhes exibido sobre o cartão.
export const DetailsOverlay = styled.div`  width: 300px;
  height: 439px;
  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  display: flex;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  flex-direction: column;`;

CloseButton
Botão para fechar o overlay de detalhes, responsivo.
export const CloseButton = styled.button`
position: absolute;
bottom: 10px;
right: 10px;
width: 25px;
height: 25px;
border: 2px solid white;
background: transparent;
border-radius: 50%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
bottom: 20px;
right: 20px;
width: 40px;
height: 40px;
}
`;

export const CloseIcon = styled.span`  color: white;
  line-height: 0;`;

CardsWrapper
Wrapper para agrupar múltiplos cartões, com estilização responsiva.
export const CardsWrapper = styled.div`  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;`;

Considerações Finais
Os componentes descritos acima foram desenvolvidos para criar uma interface de cartões interativa e responsiva. A utilização de styled-components permite a modularização da estilização, enquanto framer-motion adiciona animações suaves. Esta abordagem garante que os componentes se adaptem a diferentes tamanhos de tela e proporcionem uma experiência de usuário consistente e agradável.
