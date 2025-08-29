import { useState, useEffect } from 'react';
import './style.css';
import { HiSun } from "react-icons/hi";
import { BsMoonStars } from "react-icons/bs"; 
import Logo from '../../assets/img/apple-touch-icon.png';
import { scrollToSection } from '../../utils/smoothScroll';



const Header = () => {
    const [theme, setTheme] = useState('dark');
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]); 
    
    const toggleTheme = () => {
        setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <header id='header'>
            <nav className="nav-bar-container">
                <a href="#header" className='logo' onClick={(e) => scrollToSection(e, 1000)}>
                    <img src={Logo} alt="Logo gui" />
                    <h1>Aguinaldo</h1>
                </a> 
                <ul className="nav-links">
                    <li><a href="#header" className="nav-link" onClick={(e) => scrollToSection(e, 1000)}>Home</a></li>
                    <li><a href="#sobre" className="nav-link" onClick={(e) => scrollToSection(e, 1000)}>Sobre</a></li>
                    <li><a href="#projetos" className="nav-link" onClick={(e) => scrollToSection(e, 1000)}>Projetos</a></li>
                    <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, 1000)}>Contato</a></li>
                </ul>
                <div className="header__toggle" onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <BsMoonStars className='toggle-icon' />
                    ) : (
                        <HiSun className='toggle-icon' />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;