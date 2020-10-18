import React, { useState } from 'react';
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
`;

function App() {

  const [phrase, setPhrase] = useState({});

  const consulting = async () => {
    const url = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const phraseResult = await url.json();
    setPhrase(phraseResult[0]);
  }

  return (
    <Container>
      <Phrase
        phrase={phrase}
      />
      <BtnPhrase
        onClick={consulting}
      >
        Get Phrase
      </BtnPhrase>
    </Container>
  );
}

export default App;
