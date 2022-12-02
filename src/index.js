import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './components/timer'
import Quiz from './components/quiz';


ReactDOM.render(
  <React.StrictMode>
    <Timer seconds={300}/>
    <Quiz />
  </React.StrictMode>,
  document.getElementById('root')
);