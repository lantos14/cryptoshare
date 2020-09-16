import React, { useState, useEffect } from 'react';
import TextEditor from '../TextEditor/TextEditor';
import { encrypt, decrypt } from "../../cryptoUtils";
import * as api from '../../api';

const TextContainer = ({ role, url, generateUrl, secret }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    api.subscribeToText((err, encryptedText) => {
      const decryptedText = decrypt(encryptedText, secret);
      setText(decryptedText)
    } );
  }, [secret])

  const handleTextChange = (e) => {
    const text = e.target.value;
    const encryptedText = encrypt(text, secret);
    api.emitText(encryptedText);
  }
  
  return (
    <div>
        <TextEditor
          url={url}
          role={role}
          text={text}
          handleChange={handleTextChange}
          generateUrl={generateUrl}
        />
    </div>
  );
}

export default TextContainer;
