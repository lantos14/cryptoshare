import React, { useState, useEffect } from "react";
import TextEditor from "../TextEditor/TextEditor";
import { encrypt, decrypt, createMAC, verifyMAC } from "../../cryptoUtils";
import * as api from "../../api";

const TextContainer = ({ role, url, generateUrl, secret }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    api.subscribeToText((err, emitObject) => {
      if (!secret) {
        return;
      }

      const { encryptedText, hashFromSender } = emitObject;
      const decryptedText = decrypt(encryptedText, secret);
      const hashIsValid =
        role === "receiver"
          ? verifyMAC(hashFromSender, decryptedText, secret)
          : true;

      if (!hashIsValid) {
        console.error("Text is not authenticed, or it's integrity is damaged!");
      } else {
        setText(decryptedText);
      }
    });
  }, [secret, role]);

  const handleTextChange = (e) => {
    const text = e.target.value;
    const encryptedText = encrypt(text, secret);
    const hashFromSender = createMAC(text, secret);
    api.emitText({ encryptedText, hashFromSender });
  };

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
};

export default TextContainer;
