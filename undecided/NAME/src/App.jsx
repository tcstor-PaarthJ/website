import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Homepage from './Homepage.jsx'
import Nav from "./components/nav.jsx";
function App() {

  return (
    <>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <div className="wrapper">
        {/* <Nav /> */}
        <Homepage />
      </div>
    </>
  );
}

export default App
