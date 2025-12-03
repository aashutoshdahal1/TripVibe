import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Single route: always render the HomePage shell (navbar + sidebar + right sidebar) */}
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

