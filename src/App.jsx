import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import HomePage from './pages/HomePage'
import VideoWatchPage from './pages/VideoWatchPage'
import ItineraryPage from './pages/ItineraryPage'
import ExplorePage from './pages/ExplorePage'
import UploadPage from './pages/UploadPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {
  const isAuthenticated = true // In real app, check auth state

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/watch/:id" element={isAuthenticated ? <VideoWatchPage /> : <Navigate to="/login" />} />
          <Route path="/itinerary/:id" element={isAuthenticated ? <ItineraryPage /> : <Navigate to="/login" />} />
          <Route path="/explore" element={isAuthenticated ? <ExplorePage /> : <Navigate to="/login" />} />
          <Route path="/upload" element={isAuthenticated ? <UploadPage /> : <Navigate to="/login" />} />
          <Route path="/profile/:username" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

