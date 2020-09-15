import React, { useState, useEffect } from 'react';
import { emitSecret, subscribeToSecret, subscribeToGetSecret, emitGetSecret } from './api';
import './App.css';
import TextContainer from './components/TextContainer/TextContainer';
import { generateSecret } from './cryptoUtils'

const App = (props) => {
  const [secret, setSecret] = useState('');
  const [url, setUrl] = useState('');

  const { role } = props;
  const { key } = props.match.params;
  console.log('key: ', key, secret);

  useEffect(() => {
    if (role === 'sender') {
      subscribeToSecret((err, secret) => setSecret(secret));
      emitSecret(generateSecret())
    };

    if (role === 'receiver') {
      subscribeToGetSecret((err, match) => console.log('match: ', match, key === match));
      emitGetSecret()
    }
  }, [role, key])

  const generateUrl = () => {
    setUrl(window.location.href + secret);
  }

  return (
    <div className="App">
      <h1>Cryptoshare</h1>
      <TextContainer role={role} url={url} generateUrl={generateUrl} secret={secret} />
    </div>
  );
}

export default App;
