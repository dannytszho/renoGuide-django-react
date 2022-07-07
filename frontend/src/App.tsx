import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import HikingTrailsPage from './Components/HikingTrailsPage'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/hikingtrails" element={<HikingTrailsPage />} />
              <Route path="/" />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  )
}

export default App
