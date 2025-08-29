import Header from "../../components/Header/Header";
import Mobile from "../../ui/Mobale/mobile";
import Hero from "../../components/Hero/Hero";
import Projetos from '../../components/Projeto/Projetos'
import Sobre from '../../components/Sobre/Sobre'
import Contato from "../../components/Contatos/Contatos";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main className="maim-principal">
      <Header />
      <Mobile />
      <Hero />
      <Projetos />
      <Sobre />
      <Contato />
      <Footer />
    </main>
  );
};

export default Home;
