import { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import './style.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';


import type { IconType } from 'react-icons'; 

const skillIcons: { [key: string]: IconType } = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'React': FaReact,
  'Node.js': FaNodeJs,
  'Git': FaGitAlt,
};

interface SkillFromApi {
  id: number;
  name: string;
}

interface ProjectFromApi {
  id: number;
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  repoUrl: string;
  skills: SkillFromApi[];
  descriptionItems: string[];
}

interface SkillWithIcon {
  id: number;
  name: string;
  icon: IconType; 
}

interface ProjectWithIcon {
  id: number;
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  repoUrl: string;
  skills: SkillWithIcon[];
  descriptionItems: string[];
}

const Projetos = () => {
  const [projects, setProjects] = useState<ProjectWithIcon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://meu-portfolio-backend.onrender.com/projects");
        if (!response.ok) {
          throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
        }
        
        const data: ProjectFromApi[] = await response.json();
        
        const projectsWithIcons: ProjectWithIcon[] = data.map(project => ({
            ...project,
            skills: project.skills.map(skill => ({
                ...skill,
                icon: skillIcons[skill.name]
            }))
        }));

        setProjects(projectsWithIcons);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <section id="projetos">Carregando projetos...</section>;
  }

  if (error) {
    return <section id="projetos">Erro: {error}</section>;
  }

  return (
    <section id="projetos">
      <div className="card-projetos-texto">
        <h2>Projetos</h2>
      </div>
      <div className="conteiner-projetos">
        {projects.map(project => (
          <Card
            key={project.id} 
            title={project.title}
            description={project.description}
            image={project.image}
            previewUrl={project.previewUrl}
            repoUrl={project.repoUrl}
            skills={project.skills}
            descriptionItems={project.descriptionItems}
          />
        ))}
      </div>
    </section>
  );
};

export default Projetos;