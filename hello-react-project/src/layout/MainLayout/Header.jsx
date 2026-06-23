import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Header() {
  const { user, isAuthenticated, login, logout } = useAuth()

  return (
    <header className="app-header">
      <div className="header-logo">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}>
          React App
        </Link>
      </div>
      <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* 라우터 링크 추가 */}
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)' }}>Home</Link>
        <Link to="/basic" style={{ textDecoration: 'none', color: 'var(--text)' }}>Basic UI</Link>

        <span style={{ color: 'var(--border)' }}>|</span>

        <a href="https://react.dev" target="_blank" rel="noreferrer">React Docs</a>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">Vite Docs</a>
        
        <span style={{ color: 'var(--border)' }}>|</span>
        
        {/* Auth 관련 UI */}
        {isAuthenticated ? (
          <div className="auth-info" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span>Hi, {user.name}!</span>
            <button 
              onClick={logout} 
              style={{
                background: 'var(--accent-bg)',
                border: '1px solid var(--accent-border)',
                color: 'var(--accent)',
                borderRadius: '4px',
                padding: '4px 8px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <button 
            onClick={() => login('User')} 
            style={{
              background: 'var(--accent)',
              border: 'none',
              color: 'white',
              borderRadius: '4px',
              padding: '4px 12px',
              cursor: 'pointer'
            }}
          >
            Login
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header