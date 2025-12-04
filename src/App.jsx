import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Minimal version for initial GitHub push: only HomePage (navbar + sidebar + feed + right sidebar) */}
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

