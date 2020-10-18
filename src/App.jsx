import React from 'react';
import styled from '@emotion/styled';

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

  const consulting = () => {
    console.log('test click');
  }

  return (
    <Container>
      <BtnPhrase
        onClick={consulting}
      >
        Get Phrase
      </BtnPhrase>
    </Container>
  );
}

export default App;
