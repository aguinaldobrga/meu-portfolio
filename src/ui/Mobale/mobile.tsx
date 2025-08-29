import { FaHouse, FaRegWindowRestore, FaEnvelope } from "react-icons/fa6";
import { BsFillPersonPlusFill } from "react-icons/bs";

import "./style.css";

const Mobile = () => {
  return (
    <nav className="conteniner-nav--mobile">
      <ul className="menu menu--mobile">
        <li className="menu__item">
          <a href="header" className="menu__link active">
            <FaHouse className="menu__icon" />
            <span className="menu__text">Home</span>
          </a>
        </li>

        <li className="menu__item">
          <a className="menu__link" href="#projetos">
            <FaRegWindowRestore className="menu__icon"/>
            <span className="menu__text">Projetos</span>
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#sobre">
            <BsFillPersonPlusFill className="menu__icon"/>
            <span className="menu__text">Sobre</span>
          </a>
        </li>
        <li className="menu__item"> 
          <a className="menu__link" href="#contact"> 
            <FaEnvelope className="menu__icon"/>
            <span className="menu__text">Contato</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Mobile;
