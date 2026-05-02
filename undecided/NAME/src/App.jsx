import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Homepage from './Homepage.jsx'
import Nav from "./components/nav.jsx";
function App() {

  return (
    <div className="wrapper">
      {/* <Nav /> */}
      <Homepage />
    </div>
  )
}

export default App
