import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FooterContainer, Links } from './styles/FooterStyles';

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          Desenvolvido por Halister Fernando dos Santos com React,
          Styled Components e muitas canecas de café
        </p>
        <p>
          O link para as licensas Creative Commons
          das imagens que possuem estão no rodapé das cartas
        </p>
      </div>
      <Links>
        <nav>
          <a
            href="https://github.com/HalisterFernando"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/halister-fernando-santos/"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:halisterfernando@hitmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMail />
          </a>
        </nav>
      </Links>
    </FooterContainer>
  );
}
