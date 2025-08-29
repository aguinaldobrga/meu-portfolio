import Button from "../../ui/Button/Butoon";
import Img from '../../assets/img/aguinaldo.png'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { BsBoxArrowInDownRight } from "react-icons/bs";


import "./style.css";

const Sobre = () => {
  return (
    <section id="sobre" className='sobre'>
        <h3>Sobre mim</h3>
      <div className="card-sobre">
        <div className="carde-conteiner-sobre">
            <div className='sobre-title-img'>
                <img src={Img} alt="Imagem Aguinaldo" />
                <h2>Aguinaldo Braga</h2>
            </div>

          <div className="carde-sobre-item">
            
           
              <h4>Desenvolvimento front-end. </h4>
              <p>
                  Meu primeiro "Olá, mundo" surgiu por
                  pura curiosidade  um encontro casual com HTML, CSS e um pouco de
                  JavaScript que rapidamente se transformou em entusiasmo. Desde
                  então, venho me dedicando cada vez mais, mergulhando fundo nesse
                  universo criativo e técnico. Atualmente, estou estudando Análise e
                  Desenvolvimento de Sistemas, sempre em busca de evoluir e explorar
                  as infinitas possibilidades que o código oferece. Acredito que fé
                  e inovação podem caminhar juntas — e que cada projeto é uma chance
                  de construir algo significativo, com propósito e identidade.
              </p>
            
            <div className="card-button">
              <ul className="menu-social-hero">
                      <li>
                        <a
                          className="menu-link"
                          href="https://github.com/aguinaldobrga"
                          target="_blank"
                        >
                          <FaGithub className="fa-icone" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-link"
                          href="https://www.linkedin.com/in/aguinaldo-braga-ferreira-porfile/"
                          target="_blank"
                        >
                          <FaLinkedin className="fa-icone" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="menu-link"
                          href="https://www.instagram.com/gui_bragaoficial/"
                          target="_blank"
                        >
                          <FaInstagram className="fa-icone" />
                        </a>
                      </li>
                      
                    </ul>
                    <Button icon={BsBoxArrowInDownRight}>contato</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
