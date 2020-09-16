import React, { useState, useEffect } from 'react';
import { subscribeToGetSecret, emitGetSecret } from './api';
import './App.css';
import TextContainer from './components/TextContainer/TextContainer';

const App = (props) => {
  const [secret, setSecret] = useState('');
  const { key } = props.match.params;

  useEffect(() => {
      subscribeToGetSecret((err, match) => {
        if (match === key) {
          setSecret(match)
        } else {
          console.error('Secret mismatch!')
          setSecret('');
        }
      });
      emitGetSecret();
  }, [key])

  return (
    <div className="App">
      <h1>Cryptoshare</h1>
      <TextContainer role='receiver' secret={secret} />
    </div>
  );
}

export default App;
