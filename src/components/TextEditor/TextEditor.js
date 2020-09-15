import React from 'react';

import './TextEditor.css';

const TextEditor = ({url, role, text, handleChange, generateUrl }) => {
  return (
    <div className="text-editor">
        <textarea rows="10" cols="50" value={text} onChange={handleChange} disabled={role === 'receiver'}>
          {text}
        </textarea>
        { role === "sender" && <button onClick={generateUrl}>Generate URL</button> }
        { url && <p>{url}</p> }
    </div>
  );
}

export default TextEditor;
