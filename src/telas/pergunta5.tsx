import Pergunta from "../componentes/Pergunta/Index";

const Pergunta5 = () => {
  return (
    <Pergunta
      pergunta={
        "5. Figuras públicas, como influenciadores e artistas, têm uma presença expressiva nas redes sociais. O que pode acontecer com suas contas após a morte?"
      }
      letraA="O sistema executa o que está previsto nos termos de uso tão logo a morte seja detectada."
      letraB="A maioria não planeja o destino de seu legado digital, deixando os dados ativos para a família ou administradores tomarem decisões."
      letraC="Ambas as opções são possíveis."
      gabarito="C"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta5;
