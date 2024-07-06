import React from 'react';
import styled from 'styled-components';


const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* Ensure background color is consistent */
`;

const Title = styled.h2`
  background: -webkit-linear-gradient(145deg, #d53369, #daae51);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const GlowingBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem; /* Add some margin below the glowing bar */
`;

const GlowingBar = styled.div`
  width: 200px;
  height: 5px;
  background: linear-gradient(145deg, #d53369, #daae51);
  box-shadow: 0 0 10px #d53369, 0 0 20px #d53369, 0 0 30px #d53369, 0 0 40px #d53369;
  animation: glow 1.5s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      box-shadow: 0 0 10px #d53369, 0 0 20px #d53369, 0 0 30px #d53369, 0 0 40px #d53369;
    }
    to {
      box-shadow: 0 0 20px #daae51, 0 0 30px #daae51, 0 0 40px #daae51, 0 0 50px #daae51;
    }
  }
`;

function Resume() {
  return (
    <Section id="resume">
      <Title>Resume</Title>
      <GlowingBarContainer>
        <GlowingBar />
      </GlowingBarContainer>
      <iframe src="/assets/resume.pdf" title="Resume Document" style={{width: '80%', height: '1000px', border: 'none'}}></iframe>
    </Section>
  );
}

export default Resume;
