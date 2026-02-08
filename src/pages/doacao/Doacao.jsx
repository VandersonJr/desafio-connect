import { Card } from "../../components/infocard/Card";
import * as S from "./doacao.module.scss";
import institutoImagem from "../../assets/images/instituto.png";
import conectaImagem from "../../assets/images/conecta.png";
import futuroImagem from "../../assets/images/futuro.png";

const Doacao = () => {
  return (
    <main>
      <section className={S.container}>
        <h1>Doação</h1>

        <div className={S.cards}>
          <Card
            image={institutoImagem}
            title="Instituto grande familia"
            text="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            button="Quero Doar"
          />
          <Card
            image={futuroImagem}
            title="Projeto Futuro na Escola"
            text="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            button="Quero Doar"
          />
          <Card
            image={conectaImagem}
            title="Instituto Conecta Jovem"
            text="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            button="Quero Doar"
          />
        </div>
      </section>
    </main>
  );
};

export default Doacao;
