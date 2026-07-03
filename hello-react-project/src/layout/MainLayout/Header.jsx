import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header() {
  const { user, isAuthenticated, login, logout } = useAuth()

  return (
    <nav className="navbar navbar-expand-lg navbar-light header-container rounded-4 mx-3 mx-md-4 mt-3 mb-4 shadow-sm border border-white">
      <div className="container-fluid px-3">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2" style={{ fontFamily: 'var(--heading)', fontWeight: '800' }}>
          <span className="fs-3">🚀</span>
          <span className="text-dark">React Playland</span>
        </Link>

        {/* Right side options */}
        <div className="d-flex align-items-center gap-3">
          <div className="d-none d-sm-flex align-items-center gap-3 me-2">
            <Link to="/" className="text-decoration-none text-secondary fw-semibold small hover-opacity">
              <i className="bi bi-house-door me-1"></i>Home
            </Link>
            <Link to="/basic" className="text-decoration-none text-secondary fw-semibold small hover-opacity">
              <i className="bi bi-layout-text-window-reverse me-1"></i>Basic UI
            </Link>
          </div>

          <span className="text-muted d-none d-sm-inline opacity-50">|</span>

          {/* Auth System */}
          {isAuthenticated ? (
            <div className="d-flex align-items-center gap-2">
              <div className="badge bg-cute-pink badge-cute border-0 d-flex align-items-center gap-1 py-2 text-dark">
                <span>🧑‍💻</span>
                <span>{user.name}</span>
              </div>
              <button 
                onClick={logout} 
                className="btn btn-sm btn-cute btn-cute-outline px-3 py-1.5"
                style={{ fontSize: '0.85rem' }}
              >
                로그아웃 <i className="bi bi-box-arrow-right ms-1"></i>
              </button>
            </div>
          ) : (
            <button 
              onClick={() => login('학생')} 
              className="btn btn-sm btn-cute btn-cute-primary px-3 py-1.5"
              style={{ fontSize: '0.85rem' }}
            >
              로그인 <i className="bi bi-box-arrow-in-right ms-1"></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header