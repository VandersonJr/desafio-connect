import { Card } from "../../components/infocard/Card";
import * as S from "./voluntariado.module.scss";
import reciclagemImagem from "../../assets/images/reciclagem.png";
import aulasImagem from "../../assets/images/aulas-tecnologia.png";
import inclusaoImagem from "../../assets/images/inclusao.png";

const Voluntariado = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Voluntariado</h1>

        <div className={S.cards}>
          <Card
            image={reciclagemImagem}
            title="Mutirão de reciclagem"
            text="Coletar materiais recicláveis e orientar sobre descarte consciente."
            button="Quero Participar"
          />
          <Card
            image={aulasImagem}
            title="Aulas de Tecnologia"
            text="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            button="Quero Participar"
          />
          <Card
            image={inclusaoImagem}
            title="Esporte e Inclusão"
            text="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            button="Quero Participar"
          />
        </div>
      </section>
    </main>
  );
};

export default Voluntariado;
