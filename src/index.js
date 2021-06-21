import React from 'react';
import ReactDOM from 'react-dom';
import BasicPace from './components/BasicPace';

const App = () => {
  return (
    <div>
      <h1>Running Pace Calculator</h1>
      <BasicPace/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
