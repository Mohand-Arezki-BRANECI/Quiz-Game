import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './components/quiz';

ReactDOM.render(
  <React.StrictMode>
    
<Timer seconds={600}/>
    <Quiz />
  </React.StrictMode>,
  document.getElementById('root')
);