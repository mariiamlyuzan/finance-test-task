import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppBar } from './AppBar';
import { TickersList } from './TickersList';
function App() {
  return (
    <div className="App">
      <AppBar />
      <TickersList />
      <ToastContainer />
    </div>
  );
}

export default App;
