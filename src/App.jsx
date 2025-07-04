import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from  './components/Header'
import Contact from  './components/contact'
import Home from  './components/home'
import About from  './components/about'


function App() {
  const [count, setCount] = useState(0)

  return (
 <div className="App">
     <BrowserRouter>
       <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />  
       </Routes>
     </BrowserRouter>
   </div>

 
   )


}

export default App
