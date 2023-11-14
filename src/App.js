import './App.css'
import React, { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown'
import readme from './README.md'

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(readme)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="App">
      <ReactMarkdown className="Readme" children={markdown} />
    </div>
  );
}

export default App;
