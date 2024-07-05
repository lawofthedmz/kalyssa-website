import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background-color: #000;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #333;
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(145deg, #d53369, #daae51);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #d53369; /* Gradient start color */
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/kalyssa-merritt-8aa32b20a/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/kalyssamerritt/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
        <SocialLink href="mailto:contact@kalyssamerritt.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialLink>
      </SocialLinks>
      <FooterText>© 2024 Kalyssa. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
