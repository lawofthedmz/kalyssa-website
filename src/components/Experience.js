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

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
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

const Content = styled.div`
  max-width: 800px;
  color: #fff;
  text-align: left;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

function Experience() {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <GlowingBarContainer>
        <GlowingBar />
      </GlowingBarContainer>
      <PictureContainer>
        <GlowingBorder>
          <Picture src="/assets/conference.jpg" alt="Experience Picture" />
        </GlowingBorder>
      </PictureContainer>
      <Content>
        <Paragraph>
          During my internship at Peterson Pet Hospital, I have gained hands-on experience in various veterinary procedures and client communication skills. This experience has strengthened my passion for animal care and has provided me with invaluable insights into the veterinary field.
        </Paragraph>
        <Paragraph>
          My education at Kirkwood Community College has equipped me with a strong foundation in veterinary technology. I am committed to continuous learning and professional growth to ensure I provide the best care for animals.
        </Paragraph>
      </Content>
    </Section>
  );
}

export default Experience;
