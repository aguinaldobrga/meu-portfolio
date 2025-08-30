import { useState, type ChangeEvent, type FormEvent } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

import './style.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contato = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [buttonText, setButtonText] = useState("Enviar Mensagem");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ success: true, message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setButtonText("Enviando...");

    try {
      const response = await fetch('https://meu-portfolio-backend.onrender.com/send-email',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: data.message });
        setButtonText("Mensagem Enviada!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, message: data.message || 'Erro ao enviar a mensagem.' });
        setButtonText("Erro!");
      }
    } catch (error) {
      console.error("Erro ao enviar a mensagem:", error);
      setStatus({ success: false, message: 'Não foi possível conectar ao servidor.' });
      setButtonText("Erro!");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setButtonText("Enviar Mensagem");
        setStatus({ success: true, message: '' });
      }, 3000);
    }
  };


  return (
    <section id="contact" className="contact container">
      <h2 className="section-title">Vamos nos Conectar</h2>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              name="name"
              className="form-control" 
              placeholder="Seu nome" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              className="form-control" 
              placeholder="seu.email@exemplo.com" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea 
              id="message" 
              name="message"
              className="form-control" 
              placeholder="Sua mensagem..." 
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-geral" 
            disabled={isSubmitting}
          >
            {buttonText}
          </button>
          {status.message && (
            <p className={`status-message ${status.success ? 'success' : 'error'}`}>
              {status.message}
            </p>
          )}
        </form>
        <div className="social-links">
          <h3>Outras formas de contato</h3>
          <a href="https://github.com/aguinaldobrga" className="social-link" target="_blank">
            <div className="social-icon">
              <FaGithub />
            </div>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/aguinaldo-braga-ferreira-porfile/" className="social-link" target="_blank">
            <div className="social-icon">
              <FaLinkedinIn />
            </div>
            <span>LinkedIn</span>
          </a>
          <a href="https://wa.me/5500000000000" className="social-link" target="_blank">
            <div className="social-icon">
              <FaWhatsapp />
            </div>
            <span>WhatsApp</span>
          </a>
          <a href="mailto:email@exemplo.com" className="social-link">
            <div className="social-icon">
              <FaEnvelope />
            </div>
            <span>guigo.abf@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;