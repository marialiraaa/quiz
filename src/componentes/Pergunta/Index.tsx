import React, { useState, useEffect } from "react";
import "./styles.css";
import relogio from "../../assets/img/relogio1.png";
import img1 from "../../assets/img/heranca.png";
import img2 from "../../assets/img/img1.png";
import img3 from "../../assets/img/heranca.png";
import img4 from "../../assets/img/heranca.png";
import img5 from "../../assets/img/heranca.png";
import img6 from "../../assets/img/heranca.png";
import img7 from "../../assets/img/heranca.png";
import img8 from "../../assets/img/heranca.png";
import img9 from "../../assets/img/heranca.png";
import img10 from "../../assets/img/heranca.png";
import img11 from "../../assets/img/heranca.png";
import img12 from "../../assets/img/heranca.png";
import img13 from "../../assets/img/heranca.png";
import img14 from "../../assets/img/heranca.png";
import img15 from "../../assets/img/heranca.png";
import QuizOptionButton from "../buttons/QuizOptionButton";

type Resposta = "A" | "B" | "C";

type PerguntaType = {
  pergunta: string;
  letraA: string;
  letraB: string;
  letraC: string;
  gabarito: Resposta;
  imgSource: string;
};

const perguntas: PerguntaType[] = [
  {
    pergunta: "1. O que significa o termo Legado Digital?",
    letraA: "Transmissão de bens físicos após a morte.",
    letraB:
      "Todo o patrimônio gerado e acumulado por um usuário de plataformas digitais ao longo de sua vida.",
    letraC:
      "Documento legal que especifica a transferência de ativos digitais.",
    gabarito: "B",
    imgSource: img2,
  },
  {
    pergunta: "2. O que significa o termo ''Herança Digital''?",
    letraA: "Gestão e preservação dos dados online após a morte",
    letraB: "Processo de criação de um legado físico.",
    letraC: "Herança de bens físicos após a morte.",
    gabarito: "A",
    imgSource: ".",
  },
  {
    pergunta: "3. O que podemos incorporar em um testamento digital?",
    letraA: "Um registro abrangente dos bens físicos e tangíveis.",
    letraB:
      "Uma declaração legal que determina o destino dos bens digitais após o falecimento, incluindo a nomeação de guardiões para gerenciar contas em redes sociais, e a possibilidade de deixar mensagens finais compartilhadas online para amigos e familiares.",
    letraC: "Todas as opções estão corretas.",
    gabarito: "B",
    imgSource: ".../../../src/assets/img/heranca.png",
  },
  {
    pergunta: "4. Sobre o legado digital, ele é:",
    letraA:
      "Um conjunto de bens e ativos digitais, como fotos, e-mail e vídeos, acumulados por usuários em dispositivos e/ou na Internet, repassados para terceiros após o falecimento do proprietário",
    letraB:
      "Algo que deve ser deixado para os especialistas lidarem, não para o público se preocupar.",
    letraC: "Um conjunto de bens físicos",
    gabarito: "A",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "5. Figuras públicas, como influenciadores e artistas, têm uma presença expressiva nas redes sociais. O que pode acontecer com suas contas após a morte?",
    letraA:
      "O sistema executa o que está previsto nos termos de uso tão logo a morte seja detectada.",
    letraB:
      "A maioria não planeja o destino de seu legado digital, deixando os dados ativos para a família ou administradores tomarem decisões.",
    letraC: "Ambas as opções são possíveis.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "6. Steve Jobs, ex-diretor executivo da Apple, morreu em 2011. Como a herança digital dele foi administrada por seus familiares?",
    letraA:
      "A família de Steve Jobs preservou sua memória e continuou a prosperar com base nos projetos e visão que Jobs deixou para trás, gerenciando ativamente seus ativos digitais.",
    letraB:
      "Encerramento imediato de todas as atividades digitais relacionadas a Steve Jobs, protegendo sua privacidade póstuma.",
    letraC:
      "Todos os dados digitais foram deixados sem administração, resultando em uma preservação natural e espontânea de sua herança digital.",
    gabarito: "A",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "7. Gloria Maria, a primeira repórter negra de destaque da TV brasileira, morreu em 2023. Com relação ao seu legado digital, assinale a alternativa incorreta.",
    letraA:
      "Os familiares de Glória Maria encarregaram profissionais especializados em gestão de herança digital para lidar com suas contas e perfis online, garantindo uma transição suave e respeitosa.",
    letraB:
      "Glória Maria deixou instruções claras para que todas as suas contas e perfis digitais fossem excluídos imediatamente após sua morte, como parte de sua vontade.",
    letraC:
      "A  família de Glória Maria decidiu deixar suas contas digitais ativas, permitindo que seus seguidores continuassem a interagir com seu legado online.",
    gabarito: "B",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "8. Marília Mendonça, a rainha da sofrência no Brasil, deixou um legado musical. O que aconteceu com suas redes sociais após seu falecimento?",
    letraA: "Lançamento póstumo de novas músicas e álbuns.",
    letraB: "Todos os dados foram removidos das redes sociais.",
    letraC:
      "Não houve ação específica em relação à sua herança musical online.",
    gabarito: "A",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "9. Qual das seguintes afirmações sobre os recursos de legado digital do Facebook está correta?",
    letraA:
      "O Facebook não possui recursos para gerenciamento póstumo de contas de usuário.",
    letraB:
      "O Facebook oferece a opção de cadastrar herdeiros para gerenciamento póstumo, mas não permite transformar o perfil em um memorial digital.",
    letraC:
      "O Facebook permite que os usuários escolham um contato de legado para gerenciar sua conta após a morte; e além disso, oferece a opção de transformar o perfil em um memorial digital ou há a possibilidade de exclusão do perfil após o falecimento.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "10. O TikTok é conhecido por seu conteúdo de vídeos curtos. Como o legado digital é preservado nessa plataforma?",
    letraA: "Vídeos podem ser mantidos como tributos póstumos.",
    letraB: "Todos os vídeos são automaticamente removidos.",
    letraC:
      "Não há recursos para legado digital no TikTok, sendo assim, não há nenhuma pena para o uso indevido dos vídeos.",
    gabarito: "A",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "11. Qual opção do Gmail permite que você destine bens ou exclua dados permanentemente?",
    letraA: "Configurações de conta.",
    letraB: "Recursos de privacidade.",
    letraC: "Gerenciamento de e-mails.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "12. A documentação específica geralmente utilizada em algumas redes sociais para comprovar o falecimento de usuários é:",
    letraA: "Contratos legais.",
    letraB: "Atestado de óbito.",
    letraC: "Testamentos digitais.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta: "Qual lei brasileira regula a proteção de dados pessoais?",
    letraA: "LGPD (Lei Geral de Proteção de Dados).",
    letraB: "PROCON.",
    letraC: "Código Civil Brasileiro.",
    gabarito: "A",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "14. Como a Lei Geral de Proteção de Dados (LGPD) se aplica aos dados pessoais de uma pessoa falecida?",
    letraA: "A LGPD não se aplica aos dados de pessoas falecidas.",
    letraB:
      "A LGPD exclui especificamente os dados de pessoas falecidas de sua aplicação.",
    letraC:
      "A LGPD continua a proteger os dados pessoais de uma pessoa mesmo após sua morte, garantindo que sejam tratados de acordo com os princípios estabelecidos na lei.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
  {
    pergunta:
      "15. Como os herdeiros ou representantes legais podem exercer os direitos em relação aos dados póstumos de acordo com a Lei Geral de Proteção de Dados (LGPD)?",
    letraA:
      "Os herdeiros ou representantes legais não têm direitos sobre os dados póstumos, pois a LGPD não se aplica a pessoas falecidas.",
    letraB:
      "Os herdeiros ou representantes legais só podem acessar os dados póstumos com permissão explícita do provedor de serviços online.",
    letraC:
      "Os herdeiros ou representantes legais podem solicitar o acesso, correção ou exclusão dos dados póstumos, desde que sigam os procedimentos estabelecidos na lei.",
    gabarito: "C",
    imgSource: "../assets/img/heranca.png",
  },
];

const Pergunta = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] =
    useState<Resposta | null>(null);
  const [resposta, setResposta] = useState<boolean | null>(null);
  const [tempoRestante, setTempoRestante] = useState(30);
  const [perguntasCorretas, setPerguntasCorretas] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  const perguntaAtual = perguntas[indicePergunta];

  const selecionarResposta = (resposta: Resposta) => {
    setRespostaSelecionada(resposta);
    const correta = resposta === perguntaAtual.gabarito;
    setResposta(correta);
    if (correta) {
      setPerguntasCorretas((prevCorretas) => prevCorretas + 1);
    }
  };

  const irParaProximaPergunta = () => {
    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta((prevIndice) => prevIndice + 1);
      setRespostaSelecionada(null);
      setResposta(null);
      setTempoRestante(30);
    } else {
      setQuizFinalizado(true);
    }
  };

  const obterMensagemFinal = () => {
    if (perguntasCorretas <= 3) {
      return (
        <div>
          <h2>Novato Digital</h2>
          <p>
            Você está começando a explorar o vasto universo do legado digital.
            Cada jornada começa com um primeiro passo, e você deu esse passo
            corajoso ao participar desse quiz. Continue aprendendo e se
            aprofundando no assunto, pois há muito mais a descobrir. A cada nova
            informação, você estará mais preparado para lidar com os desafios e
            oportunidades do mundo digital. Não desanime, a prática leva à
            perfeição!
          </p>
        </div>
      );
    } else if (perguntasCorretas <= 7) {
      return (
        <div>
          <h2>Explorador Digital</h2>
          <p>
            Você já tem um bom entendimento do legado digital e está no caminho
            certo para se tornar um verdadeiro especialista. Sua curiosidade e
            vontade de aprender são suas maiores ferramentas. Continue
            explorando, fazendo perguntas e se aprofundando nos tópicos que
            ainda não domina completamente. Cada nova descoberta é um passo a
            mais na construção de um conhecimento sólido. Continue assim, você
            está indo muito bem!
          </p>
        </div>
      );
    } else if (perguntasCorretas <= 11) {
      return (
        <div>
          <h2>Navegador Digital</h2>
          <p>
            Parabéns, você tem um conhecimento sólido sobre o legado digital!
            Você demonstra um entendimento claro dos conceitos e está apto a
            tomar decisões informadas sobre sua presença digital. Sua dedicação
            ao aprendizado está evidente, e isso é algo a ser celebrado.
            Continue navegando por novos conhecimentos e se mantenha atualizado
            sobre as práticas e tecnologias emergentes. Você está a um passo de
            se tornar um mestre digital!
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Mestre Digital</h2>
          <p>
            Incrível! Você alcançou o mais alto nível de conhecimento sobre o
            legado digital. Seu domínio sobre o assunto é impressionante, e você
            está preparado para gerenciar e planejar seu legado digital de forma
            exemplar. Continue compartilhando seu conhecimento e ajudando outros
            a entenderem a importância e as nuances desse tema. Seu papel como
            líder e mentor digital é fundamental para a construção de um futuro
            digital consciente e bem gerido. Parabéns, Mestre Digital!
          </p>
        </div>
      );
    }
  };

  useEffect(() => {
    if (tempoRestante > 0 && !respostaSelecionada) {
      const timer = setTimeout(() => setTempoRestante(tempoRestante - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [tempoRestante, respostaSelecionada]);

  if (quizFinalizado) {
    return (
      <div className="borda">
        <div className="quadrado">{obterMensagemFinal()}</div>
      </div>
    );
  }

  return (
    <div className="borda">
      <div className="quadrado">
        <h4>{perguntaAtual.pergunta}</h4>
      </div>
      {!respostaSelecionada ? (
        <div className="imgCentro">
          <img src={perguntaAtual.imgSource} alt="" height={259} width={419} />
        </div>
      ) : resposta ? (
        <div className="TextoDaResposta">
          <h2 className="respostaC">Boa, Resposta Correta!</h2>
        </div>
      ) : (
        <div className="TextoDaResposta">
          <h2 className="respostaE">Ops, Resposta Incorreta!</h2>
        </div>
      )}

      {respostaSelecionada && (
        <div className="circuloPontuacao">{perguntasCorretas}</div>
      )}
      {!respostaSelecionada && (
        <div className="imgRelogio">
          <p className="temporizador">{tempoRestante}</p>
          <img src={relogio} alt="" width="135" height="179" />
        </div>
      )}
      <div className="alternativas">
        <QuizOptionButton
          labelIcon="A"
          text={perguntaAtual.letraA}
          onClick={() => selecionarResposta("A")}
          isDisable={
            respostaSelecionada ? "A" !== perguntaAtual.gabarito : false
          }
        />

        <QuizOptionButton
          labelIcon="B"
          text={perguntaAtual.letraB}
          onClick={() => selecionarResposta("B")}
          isDisable={
            respostaSelecionada ? "B" !== perguntaAtual.gabarito : false
          }
        />

        <QuizOptionButton
          labelIcon="C"
          text={perguntaAtual.letraC}
          onClick={() => selecionarResposta("C")}
          isDisable={
            respostaSelecionada ? "C" !== perguntaAtual.gabarito : false
          }
        />
      </div>

      {respostaSelecionada && (
        <div className="Botões">
          <button onClick={irParaProximaPergunta}>Próximo</button>
        </div>
      )}
    </div>
  );
};

export default Pergunta;
