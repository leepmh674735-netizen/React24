import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import NextSteps from './components/NextSteps'
import MainLayout from './layout/MainLayout'
import SkillsApp from './assets/App'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainLayout>
      <Routes>
        {/* 메인 홈 경로 */}
        <Route
          path="/"
          element={
            <>
              <Hero
                count={count}
                setCount={setCount}
                reactLogo={reactLogo}
                viteLogo={viteLogo}
                heroImg={heroImg}
              />
              <div className="ticks"></div>
              <NextSteps reactLogo={reactLogo} viteLogo={viteLogo} />
              <div className="ticks"></div>
              <section id="spacer"></section>
            </>
          }
        />

        {/* Basic UI 경로 */}
        <Route path="/basic" element={<SkillsApp />} />
      </Routes>
    </MainLayout>
  )
}

export default App




