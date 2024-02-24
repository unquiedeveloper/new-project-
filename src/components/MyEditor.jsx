// MyEditor.js
import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import Title from './Title';
import Button from './Button';
import EditorComponent from './EditorComponent';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    // Load content from localStorage, if available
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      return EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)));
    }
    return EditorState.createEmpty();
  });

  useEffect(() => {
    // Save content to localStorage whenever editorState changes
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    localStorage.setItem('editorContent', JSON.stringify(rawContentState));
  }, [editorState]);

  const handleInputChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div>
      <Title />
      <Button />
      <EditorComponent
        editorState={editorState}
        onChange={handleInputChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default MyEditor;
