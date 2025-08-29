import SkillItem from '../SkillItem/SkillItem';
import type { IconType } from 'react-icons';
import './style.css'

interface Skill {
  id: number;
  name: string;
  icon: IconType;
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul className="habilidades-list">
      {skills.map((skill) => (
        <SkillItem key={skill.id} icon={skill.icon} name={skill.name} />
      ))}
    </ul>
  );
};

export default SkillList;