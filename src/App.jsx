import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import TopNavbar from './components/TopNavbar'

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Minimal shell: just navbar and background */}
        <div className="app-shell">
          <TopNavbar />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

