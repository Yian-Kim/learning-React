import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';

const App = () => {
  return (
    <ColorProvider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;