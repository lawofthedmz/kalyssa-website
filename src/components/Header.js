import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
  background: none; /* Remove the background */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background: #1a1a1a; /* Solid color for the pill bar */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Optional: Add a subtle shadow for a floating effect */
`;

const NavItem = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const StyledNavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &.active {
    background: linear-gradient(145deg, #d53369, #daae51); /* Gradient color for the active link */
    color: #fff;
    border-radius: 20px;
    padding: 0.5rem 1rem;
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
        <NavItem><StyledNavLink href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</StyledNavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Header;
