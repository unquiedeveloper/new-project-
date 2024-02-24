// App.js
import React from 'react';
import MyEditor from './components/MyEditor';
import Title from './components/Title';
import Button from './components/Button';
import EditorComponent from './components/EditorComponent';

function App() {
  return (
    <div className="App">
      <Title />
      <Button />
      <EditorComponent />
      <MyEditor />
    </div>
  );
}

export default App;
