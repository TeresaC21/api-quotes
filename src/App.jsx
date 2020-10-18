import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

// Components
import Phrase from './components/Phrase';

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`;

const BtnPhrase = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size: .7s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  const [phrase, setPhrase] = useState({});

  const consultingAPI = async () => {
    const url = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phraseResult = await url.json();
    setPhrase(phraseResult[0]);
  }

  useEffect(() => {
    consultingAPI()
  }, []);

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <BtnPhrase
        onClick={consultingAPI}
      >
        Get Phrase
      </BtnPhrase>
    </Container>
  );
}

export default App;
