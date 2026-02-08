import { Card } from "../../components/infocard/Card";
import * as S from "./eventos.module.scss";
import empoderandoImagem from "../../assets/images/empoderando.png";
import tectransformaImagem from "../../assets/images/tectransforma.png";
import carreiraImagem from "../../assets/images/carreira.png";

const Eventos = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Eventos & Palestras</h1>

        <div className={S.cards}>
          <Card
            image={empoderandoImagem}
            title="Empoderando Jovens para o Futuro"
            text="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            span="Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
            button="Quero Participar"
          />
          <Card
            image={tectransformaImagem}
            title="Tecnologia que Transforma"
            text="Atividade: Workshop de introdução à programação e inovação digital."
            span="Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
            button="Quero Participar"
          />
          <Card
            image={carreiraImagem}
            title="Carreira e Primeiro Emprego"
            text="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado."
            span="Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            button="Quero Participar"
          />
        </div>
      </section>
    </main>
  );
};

export default Eventos;
