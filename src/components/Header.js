import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
  background: none; /* Remove the background */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
  border-radius: 50px;
  padding: 0.3rem 0.5rem;
  background: #1a1a1a; /* Solid color for the pill bar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow for a floating effect */

  @media (max-width: 768px) {
    gap: 0.3rem;
    padding: 0.2rem 0.4rem;
  }
`;

const NavItem = styled.li`
  padding: 0.3rem 0.6rem;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 0.2rem 0.4rem;
  }
`;

const StyledNavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  
  &.active {
    background: linear-gradient(145deg, #d53369, #daae51); /* Gradient color for the active link */
    color: #fff;
    border-radius: 20px;
    padding: 0.3rem 0.6rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;

    &.active {
      padding: 0.2rem 0.4rem;
    }
  }
`;

function Header() {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
        setActiveLink(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav>
      <NavList>
        <NavItem><StyledNavLink href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</StyledNavLink></NavItem>
        <NavItem><StyledNavLink href="#about" className={activeLink === 'about' ? 'active' : ''}>About</StyledNavLink></NavItem>
        <NavItem><StyledNavLink href="#experience" className={activeLink === 'experience' ? 'active' : ''}>Experience</StyledNavLink></NavItem>
        <NavItem><StyledNavLink href="#resume" className={activeLink === 'resume' ? 'active' : ''}>Resume</StyledNavLink></NavItem>
        <NavItem><StyledNavLink href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Header;
