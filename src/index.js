import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>This is the start of the homemade app.</h1>
      <p>testing webpack dev server</p>
    </div>

  )
}

ReactDOM.render(<App/>, document.getElementById('app'));
