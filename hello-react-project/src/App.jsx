import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Dashboard from './components/Dashboard'
import SkillsApp from './assets/App'
import './App.css'

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* 메인 홈 경로 */}
        <Route path="/" element={<Dashboard />} />

        {/* Basic UI 경로 */}
        <Route path="/basic" element={<SkillsApp />} />
      </Routes>
    </MainLayout>
  )
}

export default App




