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
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <GlowingBarContainer>
        <GlowingBar />
      </GlowingBarContainer>
      <PictureContainer>
        <GlowingBorder>
          <Picture src="/assets/cow.jpeg" alt="Kalyssa Merritt" />
        </GlowingBorder>
      </PictureContainer>
      <Content>
        <Paragraph>
          Hello! I'm Kalyssa Merritt, an aspiring veterinary technician currently studying at Kirkwood Community College. I am passionate about providing the best care for animals and gaining hands-on experience.
        </Paragraph>
        <Paragraph>
          My journey into veterinary medicine has been driven by a lifelong love for animals and a desire to make a positive impact on their lives. I am dedicated to learning and growing in this field, and I look forward to a rewarding career helping animals and their owners.
        </Paragraph>
      </Content>
    </Section>
  );
}

export default About;
