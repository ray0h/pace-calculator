import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './components/Basic';

const App = () => {
  return (
    <div>
      <h1>Running Pace Calculator</h1>
      <Basic/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
