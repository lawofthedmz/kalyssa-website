import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Label = styled.label`
  width: 100%;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: linear-gradient(145deg, #d53369, #daae51);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:disabled {
    opacity: 0.5;
  }
`;

const SuccessMessage = styled.p`
  color: #d53369;
  margin-top: 1rem;
`;

function Contact() {
  const [state, handleSubmit] = useForm("xzzpbjqw");
  if (state.succeeded) {
    return <SuccessMessage>Thank you! Your message has been sent.</SuccessMessage>;
  }

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <GlowingBarContainer>
        <GlowingBar />
      </GlowingBarContainer>
      <PictureContainer>
        <GlowingBorder>
          <Picture src="/assets/twodogs.jpeg" alt="Contact Picture" />
        </GlowingBorder>
      </PictureContainer>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email Address:</Label>
        <Input id="email" type="email" name="email" required />
        {state.errors && <ValidationError prefix="Email" field="email" errors={state.errors} />}
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" name="message" required></Textarea>
        {state.errors && <ValidationError prefix="Message" field="message" errors={state.errors} />}
        <Button type="submit" disabled={state.submitting}>Submit</Button>
      </Form>
      {state.succeeded && <SuccessMessage>Thank you! Your message has been sent.</SuccessMessage>}
      {state.errors && state.errors.length > 0 && <SuccessMessage>Oops! There was an error. Please try again.</SuccessMessage>}
    </Section>
  );
}

export default Contact;
