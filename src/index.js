import React from 'react';
import ReactDOM from 'react-dom';
import BasicPace from './components/BasicPace';
import BasicDist from './components/BasicDist';

const App = () => {
  return (
    <div>
      <h1>Running Pace Calculator</h1>
      <BasicDist/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
