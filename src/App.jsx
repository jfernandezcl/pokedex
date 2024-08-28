import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import PokemonDetail from './components/PokemonDetail';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/pokemon/:name' element={<PokemonDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
