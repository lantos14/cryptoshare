import React, { useState, useEffect } from "react";
import { emitSecret, subscribeToSecret } from "./api";
import "./App.css";
import TextContainer from "./components/TextContainer/TextContainer";
import { generateSecret } from "./cryptoUtils";

const App = () => {
  const [secret, setSecret] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    subscribeToSecret((err, secret) => setSecret(secret));
    emitSecret(generateSecret());
  }, []);

  const generateUrl = () => {
    setUrl(window.location.href + secret);
  };

  return (
    <div className="App">
      <h1>Cryptoshare</h1>
      <TextContainer
        role="sender"
        url={url}
        generateUrl={generateUrl}
        secret={secret}
      />
    </div>
  );
};

export default App;
