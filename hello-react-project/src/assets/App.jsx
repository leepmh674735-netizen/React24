import React, { useState } from 'react'
import './App.css'

function App() {
  // 프론트엔드 기술 목록 상태
  const [frontendSkills, setFrontendSkills] = useState([
    'HTML5',
    'CSS3',
    'Javascript',
    'jQuery'
  ])

  // 백엔드 및 기타 기술 목록 상태
  const [backendSkills, setBackendSkills] = useState([
    'Java',
    'Oracle',
    'JSP',
    'Spring Boot'
  ])

  // 폼 입력 상태
  const [gubun, setGubun] = useState('front')
  const [title, setTitle] = useState('')

  // 항목 추가 핸들러
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('기술명을 입력해주세요!')
      return
    }

    if (gubun === 'front') {
      setFrontendSkills([...frontendSkills, title.trim()])
    } else {
      setBackendSkills([...backendSkills, title.trim()])
    }

    setTitle('') // 입력창 초기화
  }

  return (
    <div className="react-basic-container">
      <h2>React-기본 (동적 리스트)</h2>
      
      <ol className="main-list">
        <li>
          <strong>프론트엔드</strong>
          <ul>
            {frontendSkills.map((skill, index) => (
              <li key={`front-${index}`}>{skill}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>백엔드 / 기타</strong>
          <ul>
            {backendSkills.map((skill, index) => (
              <li key={`back-${index}`}>{skill}</li>
            ))}
          </ul>
        </li>
      </ol>

      <form onSubmit={handleSubmit} className="add-form">
        <select 
          name="gubun" 
          value={gubun} 
          onChange={(e) => setGubun(e.target.value)}
          className="select-box"
        >
          <option value="front">프론트엔드</option>
          <option value="back">백엔드/기타</option>
        </select>
        <input 
          type="text" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="추가할 기술 입력"
          className="input-text"
        />
        <input type="submit" value="추가" className="submit-btn" />
      </form>
    </div>
  )
}

export default App
