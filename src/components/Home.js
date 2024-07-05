import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000; /* Ensure background color is consistent */
`;

const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`;

const GlowingBorder = styled.div`
  border-radius: 50%;
  padding: 5px; /* Padding to create the glowing effect */
  background: linear-gradient(145deg, #d53369, #daae51);
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  background-color: #000; /* Ensure background color is consistent */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Name = styled.h1`
  background: -webkit-linear-gradient(145deg, #d53369, #daae51);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 3rem; /* Increased font size */
  line-height: 1.2;
  font-family: 'Montserrat', sans-serif; /* Ensure font is applied */
`;

const Title = styled.h2`
  color: #fff;
  margin-top: 0.5rem;
  font-size: 2rem; /* Increased font size */
  font-family: 'Montserrat', sans-serif; /* Ensure font is applied */
`;

function Home() {
  return (
    <Section id="home">
      <PictureContainer>
        <GlowingBorder>
          <Picture src="/assets/portrait.jpg" alt="Kalyssa Merritt" />
        </GlowingBorder>
      </PictureContainer>
      <TextContainer>
        <Name>Kalyssa</Name>
        <Name>Merritt</Name>
        <Title>Aspiring Veterinary Technician</Title>
      </TextContainer>
    </Section>
  );
}

export default Home;
