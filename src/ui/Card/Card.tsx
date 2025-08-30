
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Button from "../../ui/Button/Butoon";
import SkillList from '../../ui/SkillList/SkillList'; 
import type { IconType } from 'react-icons';

import "./style.css"; 


interface Skill {
  id: number;
  name: string;
  icon: IconType;
}

interface CardProps {
  title: string;
  description: string;
  image: string;
  skills: Skill[];
  descriptionItems: string[];
  previewUrl: string;
  repoUrl: string;
}


const Card = ({ 
  title, 
  description, 
  image, 
  skills, 
  descriptionItems, 
  previewUrl,
  repoUrl
}: CardProps) => {
  return (
    <div className="card-projeto">
      <div className="card-image-contener">
       
        <img className="card-corver" src={`https://meu-portfolio-backend.onrender.com${image}`} alt={`Capa do projeto ${title}`} />
      </div>

      <div className="card-content-wrapper">
       
        <h3 className="card-title">{title}</h3>
       
        <p className="card-descrition">{description}</p>
        <ul className="card-list">
       
          {descriptionItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      
        <ul className="card-habilidades-list">
          <li>
          
            <SkillList skills={skills} />
          </li>
        </ul> 

        <div className="card-buttun-projeto">
        
          <Button icon={BsBoxArrowInDownRight} onClick={() => window.open(previewUrl, '_blank')}>
            Prévia
          </Button>
          <Button icon={FaGithub} onClick={() => window.open(repoUrl, '_blank')}>
            Repositório
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;