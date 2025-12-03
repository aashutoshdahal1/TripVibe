import { Link } from 'react-router-dom'
import { Search, Upload, Bell, User } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'
import './TopNavbar.css'

const TopNavbar = ({ showSearch = true, showUpload = true }) => {
  return (
    <nav className="top-navbar glass">
      <div className="navbar-content">
        {showSearch && (
          <div className="navbar-search">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search destinations, creators..."
              className="search-input"
            />
          </div>
        )}
        <div className="navbar-actions">
          {showUpload && (
            <Link to="/upload" className="navbar-btn">
              <Upload size={20} />
              <span>Upload</span>
            </Link>
          )}
          <DarkModeToggle />
          <button className="navbar-icon-btn">
            <Bell size={20} />
          </button>
          <Link to="/profile/johndoe" className="navbar-avatar">
            <User size={20} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar

