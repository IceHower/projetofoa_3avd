import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <SignUp/>
    </div>
  );
}

export default App;
