import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainRoutes from './Routes/Routes';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar /> <MainRoutes />
       
      </div>
    </>
  );
}

export default App;
