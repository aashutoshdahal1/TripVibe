import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import './DarkModeToggle.css'

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="toggle-icon" />
      ) : (
        <Moon size={20} className="toggle-icon" />
      )}
    </button>
  )
}

export default DarkModeToggle

