import React from 'react';
import icon_tr from './icon_tr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={icon_tr} className="App-logo" alt="icon" />
        <p>
          荻野 将拓 / Masahiro Ogino
        </p>
        <p>
          email: oginomaa@gmail.com
        </p>
        <p>
          twitter:&nbsp; 
          <a
            className="App-link"
            href="https://twitter.com/emuogi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @emuogi
          </a>
        </p>
        <p>
          github:&nbsp; 
          <a
            className="App-link"
            href="https://github.com/oginom"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/oginom
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
