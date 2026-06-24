/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react'

// AuthContext 생성
const AuthContext = createContext(null)

// AuthProvider 컴포넌트
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // null 이면 비로그인 상태, 객체면 로그인 상태

  const login = (username) => {
    // 임시 로그인 처리
    setUser({ name: username, role: 'user' })
  }

  const logout = () => {
    setUser(null)
  }

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// 헬퍼 커스텀 훅 - 다른 컴포넌트에서 쉽게 사용할 수 있도록 함
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
