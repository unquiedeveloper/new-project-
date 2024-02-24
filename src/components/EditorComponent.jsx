// EditorComponent.js
import React from 'react';
import { Editor, EditorState } from 'draft-js';


const EditorComponent = ({ editorState, onChange, handleKeyCommand }) => {
  return (
    <div style={{ border: '1px solid #ccc', minHeight: '200px', padding: '10px' }}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default EditorComponent;
