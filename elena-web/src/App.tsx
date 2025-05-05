import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/homePage'
import { BioPage } from './pages/BioPage/bioPage'
import { PitchDeck } from './pages/PitchDeck/pitchDeck'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bioPage" element={<BioPage />} />
      <Route path="/pitchDeck" element={<PitchDeck />} />
    </Routes>
  )
}

export default App