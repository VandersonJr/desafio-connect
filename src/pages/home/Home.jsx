import Banner from "../../assets/images/banner.png";
import * as S from "./home.module.scss";

const Home = () => {
  return (
    <main className={S.Container}>
      <section className={S.cardText}>
        <section className={S.campText}>
          <h1 className={S.titText}>Projetos Sociais que transformam</h1>
          <p className={S.pagText}>
            Conectamos sua empresa com projetos sociais impactantes. Juntos,
            criamos mudanças reais na comunidade.
          </p>
          <button className={S.btnCad}>Cadastrar Empresa →</button>
        </section>

        <section className={S.campDados}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article>
            <h2>1.2K+</h2>
            <h3>Projetos Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Vidas Impactadas</h3>
          </article>
        </section>
      </section>

      <section className={S.cardImage}>
        <img className={S.Banner} src={Banner} alt="Mãos se conectando" />
      </section>
    </main>
  );
};

export default Home;
