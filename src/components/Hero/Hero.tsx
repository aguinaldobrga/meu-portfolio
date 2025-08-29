import Button from "../../ui/Button/Butoon";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import SkillList from "../../ui/SkillList/SkillList";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";

import { scrollToSection } from "../../utils/smoothScroll";

import "./style.css";

const mySkills = [
  { id: 1, name: "HTML5", icon: FaHtml5 },
  { id: 2, name: "CSS3", icon: FaCss3Alt },
  { id: 3, name: "JavaScript", icon: FaJs },
  { id: 4, name: "React", icon: FaReact },
  { id: 5, name: "Git", icon: FaGitAlt },
  { id: 6, name: "NodeJs", icon: FaNodeJs },
  { id: 7, name: "Github", icon: FaGithub },
  { id: 8, name: "Angular", icon: FaAngular },
];

const Hero = () => {
  return (
    <section className="hero-conteiner">
      <div className="conteiner-hero-texto">
        <h1 className="hero-title">
          Transformando ideias em experiências digitais elegantes
        </h1>

        <p className="hero-title-local">
          Soluções criativas em desenvolvimento front-end
          <span>Aguinaldo Braga, Manaus-Am, Desenvolvedor Front-end</span>
        </p>
      </div>
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
    
      <a href="#projetos" onClick={(e) => scrollToSection(e, 1000)}>
        <Button icon={BsBoxArrowInDownRight}>Ver Projetos</Button>
      </a>
    
      {/* <div className="conteiner-hero-vidio">
        <video controls>
          <source
            src="https://www.webmobilefirst.com/en/screencasts/rwrvz06_z4v7oi/"
            type="video/mp4"
          />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div> */}
      <section className="conteiner-habilidades">
        <div className="habilidades">
          <h2>Habilidades</h2>
          <p>
            Conhecimento nas principais tecnologias do mercado, com foco em
            desenvolvimento <br />
            front-end moderno e responsivo. <br />
            Domínio de ferramentas que impulsionam a criação de interfaces
            intuitivas e performáticas.
          </p>

          <div className="habilidades-skill-hero">
            <SkillList skills={mySkills} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
