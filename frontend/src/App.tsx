import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <Login/>
    </div>
  );
}

export default App;
