import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';  // Updated import

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 100px; /* Adjust the value as per the header height */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <MainContent>
          <Home />
          <About />
          <Experience />
          <Contact />
        </MainContent>
        <Footer />
      </AppContainer>
    </>
  );
}

export default App;

