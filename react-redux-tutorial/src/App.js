import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './components/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;