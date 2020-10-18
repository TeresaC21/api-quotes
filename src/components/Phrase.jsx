import React from 'react';

const Phrase = ({ phrase }) => {
    return (
        <>
            <h1>{phrase.quote}</h1>
            <p>- {phrase.author}</p>
        </>
    );
}

export default Phrase;
