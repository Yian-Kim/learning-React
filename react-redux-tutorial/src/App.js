import React from 'react';
import CounterContainer from './components/CounterContainer';
import TodosContainer from './components/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;