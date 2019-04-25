import React from 'react';
import './App.css';
// import './Reset.css';
import {HashRouter} from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <input />
        <input type='password'/>
        {routes}
      </div>

    </HashRouter>
  );
}

export default App;
