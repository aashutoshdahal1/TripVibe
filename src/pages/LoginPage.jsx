import { Link } from 'react-router-dom'
import { Mail, Lock, Github, Chrome } from 'lucide-react'
import DarkModeToggle from '../components/DarkModeToggle'
import './AuthPage.css'

const LoginPage = () => {
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
            <p>Welcome back! Sign in to continue your journey</p>
          </div>

          <form className="auth-form">
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
                  placeholder="Enter your password"
                  className="input"
                />
              </div>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign In
            </button>

            <div className="divider">
              <span>or continue with</span>
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
                Don't have an account?{' '}
                <Link to="/signup" className="auth-link">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

