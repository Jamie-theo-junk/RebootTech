import Home from './pages/home/home'
import Navbar from "./components/navbar/navbar"
import Footer from './components/Footer/Footer'
import Categories from './pages/searchCategory/searchCategory'
import Sell from './pages/sellItem/Sell'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
<div className="app-container">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchCategory" element={<Categories/>} />
            <Route path="/sell" element={<Sell/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
