import Home from './pages/home/home'
import Navbar from "./components/navbar/navbar"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
     <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>} />
      </Routes>
  </Router>
  )
}

export default App
