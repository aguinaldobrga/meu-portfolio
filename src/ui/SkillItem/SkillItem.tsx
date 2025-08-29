import type { IconType } from "react-icons";
import "./style.css";

interface SkillItemProps {
  icon: IconType;
  name: string;
}

const SkillItem = ({ icon: Icon, name }: SkillItemProps) => {
  return (
    <li className="skill-item">
      <Icon className="skill-icon" />
      <span className="skill-name">{name}</span>
    </li>
  );
};

export default SkillItem;