import { useState } from 'react';
import { Navbar } from './components/navbar';
import './App.css';
import { Footer } from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Footer/>
    </>
  )
}

export default App
