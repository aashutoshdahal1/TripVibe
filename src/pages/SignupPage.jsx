import { Link } from 'react-router-dom'
import { Mail, Lock, User, Github, Chrome } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'
import './AuthPage.css'

const SignupPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-dark-mode-toggle">
        <DarkModeToggle />
      </div>
      <div className="auth-background">
        <div className="auth-overlay"></div>
      </div>
      <div className="auth-container">  
        <div className="auth-card glass">
          <div className="auth-header">
              <h1>TripVibe</h1>
            <p>Join TripVibe and start sharing your adventures</p>
          </div>

          <form className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={20} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email</label>
              <div className="input-wrapper">
                <Mail size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <div className="input-wrapper">
                <Lock size={20} />
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="input"
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to the Terms of Service and Privacy Policy</span>
              </label>
            </div>

            <button type="submit" className="auth-submit-btn">
              Create Account
            </button>

            <div className="divider">
              <span>or sign up with</span>
            </div>

            <div className="social-buttons">
              <button type="button" className="social-btn">
                <Github size={20} />
                <span>GitHub</span>
              </button>
              <button type="button" className="social-btn">
                <Chrome size={20} />
                <span>Google</span>
              </button>
            </div>

            <div className="auth-footer">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="auth-link">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignupPage

