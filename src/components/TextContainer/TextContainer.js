import React, { useState, useEffect } from 'react';
import TextEditor from '../TextEditor/TextEditor';
import { encrypt, decrypt } from "../../cryptoUtils";
import * as api from '../../api';

const TextContainer = ({ role, url, generateUrl, secret }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    api.subscribeToText((err, encryptedText) => {
      console.log('useEffect text, secret: ', encryptedText, secret);
      const decryptedText = decrypt(encryptedText, secret);
      console.log('decryptedText: ', decryptedText);
      setText(decryptedText)
    } );
  }, [secret])

  const handleTextChange = (e) => {
    const text = e.target.value;
    console.log('handleTextChange: ', text);
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
