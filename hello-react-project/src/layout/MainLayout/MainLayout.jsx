import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './MainLayout.css'

function MainLayout({ children }) {
  return (
    <div className="app-container">
      {/* 공통 헤더 영역 */}
      <Header />

      {/* 메인 콘텐츠 영역 */}
      <main className="app-content">
        {children}
      </main>

      {/* 공통 푸터 영역 */}
      <Footer />
    </div>
  )
}

export default MainLayout

