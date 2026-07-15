import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const DEV_QUOTES = [
  { text: "천재는 노력하는 자를 이길 수 없고, 노력하는 자는 즐기는 자를 이길 수 없다! 오늘 개발도 즐겁게! 💻✨", author: "Antigravity" },
  { text: "버그가 생기면? 슬퍼하지 마세요. 새로운 배움과 성장의 기회입니다! 🐛 ➜ 🦋", author: "Debugging wisdom" },
  { text: "React 컴포넌트처럼 유연하고, State처럼 항상 변화하며 발전하는 멋진 개발자가 되어봅시다! 🚀", author: "Component theory" },
  { text: "커밋 한 번에 행복 한 스푼! 오늘도 어제보다 한 걸음 더 나아갔습니다. ☕🌱", author: "Daily Commit" },
  { text: "작동한다고 해서 다 끝난 것은 아닙니다. 코드는 쓰여지는 시간보다 읽히는 시간이 훨씬 깁니다. ✍️", author: "Clean Code" },
  { text: "가장 뛰어난 최적화는 쓸데없는 연산을 아예 하지 않는 것입니다. ⚡", author: "Optimization Guide" },
  { text: "한 줄의 코드 뒤에는 수많은 오류와 인내의 시간이 서려 있습니다. 힘내세요! 🔥", author: "Developer Spirit" }
]

const LECTURE_DATA = [
  { id: 'react01', title: 'react01-basic', desc: 'React 기본 문법, JSX, props, event 처리', emoji: '🌱', tag: '기초' },
  { id: 'react02', title: 'react02-router', desc: 'Single Page Application 라우팅, Link, Route 사용법', emoji: '🛣️', tag: '라우팅' },
  { id: 'react03', title: 'react03-lifecycle', desc: '컴포넌트 Lifecycle 생명주기 및 useEffect 심화', emoji: '🔄', tag: '라이프사이클' },
  { id: 'react04', title: 'react04-hook-opt', desc: 'React.memo, useMemo, useCallback 최적화 기법', emoji: '⚡', tag: '최적화' },
  { id: 'react05', title: 'react05-hook-global', desc: 'Context API를 이용한 전역 데이터 공유 및 상태 전달', emoji: '🌐', tag: '컨텍스트' },
  { id: 'react06', title: 'react06-hook-enhanced', desc: 'useReducer 기반 상태 복합 처리 및 커스텀 훅 제작', emoji: '🧪', tag: '고급훅' },
  { id: 'react07', title: 'react07-redux-toolkit', desc: 'Redux Toolkit 슬라이스, 디스패치 전역 상태 관리', emoji: '📦', tag: '리덕스' },
  { id: 'react08', title: 'react08-zustand', desc: '가볍고 유연한 Zustand 라이브러리를 활용한 전역 관리', emoji: '🐻', tag: '쥬스탄드' },
  { id: 'react09', title: 'react09-firestore', desc: 'Firebase Cloud Firestore NoSQL 연동 및 CRUD', emoji: '🔥', tag: '파이어베이스' },
  { id: 'react10', title: 'react10-realtime', desc: 'Firebase Realtime Database 연동 및 양방향 채팅 기초', emoji: '⏰', tag: '실시간DB' },
  { id: 'react11', title: 'react11-storage', desc: 'Firebase Storage 이미지/파일 업로드 및 실시간 노출', emoji: '📂', tag: '스토리지' },
]

const PROJECT_DATA = [
  {
    id: 'proj01',
    title: 'Project 01: Board Array',
    desc: 'React 컴포넌트 내부 상태(Array)만을 사용한 로컬 CRUD 게시글 작성 및 삭제 서비스',
    link: '/project01.html',
    badge: 'State Array',
    badgeClass: 'bg-cute-pink',
    icon: 'bi-clipboard-data',
    glowClass: 'glow-pink',
    color: '#ff7b90'
  },
  {
    id: 'proj02',
    title: 'Project 02: Board API',
    desc: '외부 Mock API 서버와 비동기 통신(Fetch/Axios)을 연결해 서버 데이터 기반으로 작동하는 게시판',
    link: '/project02.html',
    badge: 'API Integration',
    badgeClass: 'bg-cute-mint',
    icon: 'bi-globe-asia-australia',
    glowClass: 'glow-mint',
    color: '#1ac88a'
  },
  {
    id: 'proj03',
    title: 'Project 03: Live Comments',
    desc: '유효성 체크 기능이 탑재되어 안전하고 예쁘게 소통할 수 있는 실시간 댓글 남기기 피드',
    link: '/project03.html',
    badge: 'Form & Validation',
    badgeClass: 'bg-cute-blue',
    icon: 'bi-chat-left-heart',
    glowClass: 'glow-blue',
    color: '#1e9bee'
  },
  {
    id: 'proj04',
    title: 'Project 04: Scoreboard',
    desc: '플레이어 목록 추가, 실시간 점수 가감, 순위 정렬이 화려하게 연동되는 아케이드용 스코어보드',
    link: '/project04.html',
    badge: 'Complex State',
    badgeClass: 'bg-cute-purple',
    icon: 'bi-trophy-fill',
    glowClass: 'glow-purple',
    color: '#8c46ff'
  },
  {
    id: 'proj05',
    title: 'Project 05: KakaoTalk Clone',
    desc: 'Firebase Firestore DB 실시간 동기화를 적용한 귀엽고 노란 디자인의 다중 채팅 메신저',
    link: '/project05.html',
    badge: 'Firebase Chat',
    badgeClass: 'bg-cute-yellow',
    icon: 'bi-chat-fill',
    glowClass: 'glow-pink',
    color: '#e5c100'
  }
]

const BUBBLES = [
  { id: 1, left: '10%', size: '35px', delay: '0s', duration: '14s' },
  { id: 2, left: '25%', size: '55px', delay: '3s', duration: '18s' },
  { id: 3, left: '45%', size: '25px', delay: '1s', duration: '12s' },
  { id: 4, left: '65%', size: '60px', delay: '6s', duration: '20s' },
  { id: 5, left: '80%', size: '30px', delay: '2s', duration: '15s' },
  { id: 6, left: '92%', size: '45px', delay: '4s', duration: '16s' }
]

function Dashboard() {
  // Theme state: pink, mint, blue, purple
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('kosmo_dashboard_theme') || 'pink'
  })

  // Dev note state
  const [devNote, setDevNote] = useState(() => {
    return localStorage.getItem('kosmo_dashboard_note') || '오늘도 한 줄의 코드를 작성하며 멋진 개발자로 성장하는 중! 💻⚛️'
  })

  // Random quote state
  const [quoteIdx, setQuoteIdx] = useState(0)
  const [animateQuote, setAnimateQuote] = useState(false)

  // Progress checklist state
  const [lectureProgress, setLectureProgress] = useState(() => {
    const saved = localStorage.getItem('kosmo_lecture_progress')
    return saved ? JSON.parse(saved) : {}
  })

  // Sparkle particles state
  const [particles, setParticles] = useState([])

  // Theme changing effect
  useEffect(() => {
    localStorage.setItem('kosmo_dashboard_theme', activeTheme)
    
    let glowColor = '#ff7b90' // pink default
    if (activeTheme === 'mint') glowColor = '#7bf0c2'
    if (activeTheme === 'blue') glowColor = '#7bd5ff'
    if (activeTheme === 'purple') glowColor = '#b388ff'
    
    document.documentElement.style.setProperty('--coral-pink', glowColor)
  }, [activeTheme])

  // Save dev notes automatically
  useEffect(() => {
    localStorage.setItem('kosmo_dashboard_note', devNote)
  }, [devNote])

  // Save progress automatically
  useEffect(() => {
    localStorage.setItem('kosmo_lecture_progress', JSON.stringify(lectureProgress))
  }, [lectureProgress])

  // Quote button handler
  const handleNextQuote = () => {
    setAnimateQuote(true)
    setTimeout(() => {
      setQuoteIdx((prev) => (prev + 1) % DEV_QUOTES.length)
      setAnimateQuote(false)
    }, 200)
  }

  // Toggle checklist item + Sparkle effect
  const handleToggleLecture = (id, e) => {
    const isChecking = !lectureProgress[id]
    
    setLectureProgress((prev) => ({
      ...prev,
      [id]: isChecking
    }))

    // Spawn sparkles if user marks as complete
    if (isChecking && e) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const clickY = e.clientY - rect.top

      const colors = ['#ff7b90', '#7bf0c2', '#7bd5ff', '#b388ff', '#fff37a']
      const newParticles = []
      
      for (let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 40 + Math.random() * 90
        newParticles.push({
          id: `${Date.now()}-${i}-${Math.random()}`,
          x: clickX,
          y: clickY,
          dx: `${Math.cos(angle) * speed}px`,
          dy: `${Math.sin(angle) * speed}px`,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: `${6 + Math.random() * 8}px`
        })
      }

      setParticles((prev) => [...prev, ...newParticles])

      // Cleanup particles after animation finishes
      setTimeout(() => {
        setParticles((prev) => prev.filter(p => !newParticles.includes(p)))
      }, 800)
    }
  }

  // KakaoTalk Share handler
  const handleKakaoShare = () => {
    if (!window.Kakao) {
      alert('카카오 SDK가 아직 로드되지 않았습니다. 잠시 후 다시 시도해 주세요!')
      return
    }

    try {
      if (!window.Kakao.isInitialized()) {
        let kakaoKey = import.meta.env.VITE_KAKAO_API_KEY || localStorage.getItem('kosmo_kakao_app_key')

        if (!kakaoKey) {
          kakaoKey = window.prompt(
            '💬 카카오톡 공유 기능을 실행하기 위해 \nKakao Developers에서 발급받은 [JavaScript 앱 키]를 입력해 주세요!\n(입력하신 키는 브라우저에 안전하게 저장됩니다.)'
          )
          if (kakaoKey && kakaoKey.trim()) {
            localStorage.setItem('kosmo_kakao_app_key', kakaoKey.trim())
            kakaoKey = kakaoKey.trim()
          } else {
            return
          }
        }

        window.Kakao.init(kakaoKey)
      }

      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'React Playland 🚀✨',
          description: '리액트 5대 실습 프로젝트와 실시간 강의 진도율 트래커가 있는 나만의 리액트 연구실로 초대합니다! 🧪💛',
          imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=80',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '구경하러 가기 🧪',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    } catch (error) {
      console.error('Kakao share error:', error)
      alert('카카오톡 공유 도중 에러가 발생했습니다. 앱 키가 올바른지, 혹은 플랫폼 사이트 도메인에 현재 주소가 등록되어 있는지 확인해 주세요!')
    }
  }

  // Calculate stats
  const completedCount = Object.values(lectureProgress).filter(Boolean).length
  const totalLectures = LECTURE_DATA.length
  const progressPercent = totalLectures > 0 ? Math.round((completedCount / totalLectures) * 100) : 0

  // Mascot Speech Logic based on progress
  const getMascotSpeech = (progress) => {
    if (progress === 0) {
      return "반가워냥! 🐾 나와 함께 신나는 리액트 탐험을 떠나볼까냥? 아래 실습 폴더를 하나씩 완료 체크해 보라옹! ⚛️✨"
    } else if (progress > 0 && progress < 45) {
      return `오오! 벌써 ${progress}%나 공부했다냥! 아주 대견하다옹. 오늘 코딩 공부도 화이팅이다냥! 🐟⭐`
    } else if (progress >= 45 && progress < 80) {
      return `와우! 절반이나 넘게 정복했다냥! 🧪⚡ 슬슬 리액트의 고수가 되어가는 느낌이다옹. 조금만 더 힘내자냥!`
    } else if (progress >= 80 && progress < 100) {
      return `거의 다 끝났다냥! 🏆 99%의 땀방울이 보석이 될 시간이다옹. 끝까지 달려보자냥! 야옹!`
    } else {
      return "대단해냥! 🏆🎉 리액트 모든 코스를 완벽하게 정복했다옹! 너는 이제 진짜 최강의 리액트 마스터다냥! 👑🐱"
    }
  }

  return (
    <div className="container py-4 position-relative z-1">
      {/* Background Animated Floating Bubbles */}
      {BUBBLES.map((bub) => (
        <div
          key={bub.id}
          className="bubble-bg"
          style={{
            left: bub.left,
            width: bub.size,
            height: bub.size,
            animationDelay: bub.delay,
            animationDuration: bub.duration
          }}
        />
      ))}

      {/* 1. Theme and Quick Panel */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2 bg-white px-3 py-2 rounded-pill shadow-sm">
          <span className="fw-bold text-muted small"><i className="bi bi-palette-fill me-1"></i>테마 선택:</span>
          {['pink', 'mint', 'blue', 'purple'].map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className="rounded-circle border-0"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: 
                  theme === 'pink' ? '#ff7b90' :
                  theme === 'mint' ? '#7bf0c2' :
                  theme === 'blue' ? '#7bd5ff' : '#b388ff',
                transform: activeTheme === theme ? 'scale(1.3)' : 'scale(1)',
                transition: 'all 0.2s',
                boxShadow: activeTheme === theme ? '0 0 8px rgba(0,0,0,0.3)' : 'none'
              }}
              title={`${theme} 테마`}
            />
          ))}
        </div>
        
        <div className="d-flex gap-2 flex-wrap">
          <button 
            onClick={handleKakaoShare}
            className="btn btn-cute btn-sm shadow-sm d-flex align-items-center gap-1.5"
            style={{ backgroundColor: '#fee500', color: '#191919', border: 'none' }}
          >
            <i className="bi bi-chat-fill"></i> 카카오톡 공유
          </button>
          <Link to="/basic" className="btn btn-cute btn-cute-outline btn-sm shadow-sm">
            <i className="bi bi-list-task me-1"></i>기본 UI 실습
          </Link>
          <a href="https://react.dev" target="_blank" rel="noreferrer" className="btn btn-cute btn-cute-outline btn-sm shadow-sm">
            <i className="bi bi-journal-code me-1"></i>React 공식 문서
          </a>
        </div>
      </div>

      {/* 2. Mascot & Hero Header Section */}
      <div className="glass-card p-4 p-md-5 mb-5 text-center position-relative overflow-hidden glow-pink">
        {/* Background sparkles */}
        <span className="position-absolute fs-1 animate-float" style={{ top: '10%', left: '5%', opacity: 0.35, userSelect: 'none' }}>🚀</span>
        <span className="position-absolute fs-1 animate-float" style={{ bottom: '15%', right: '5%', opacity: 0.35, userSelect: 'none', animationDelay: '1.2s' }}>✨</span>
        <span className="position-absolute fs-2 animate-float" style={{ top: '75%', left: '8%', opacity: 0.3, userSelect: 'none', animationDelay: '2.4s' }}>⚛️</span>
        <span className="position-absolute fs-2 animate-float" style={{ top: '15%', right: '12%', opacity: 0.3, userSelect: 'none', animationDelay: '1.8s' }}>💛</span>
        
        <div className="position-relative z-1 d-flex flex-column align-items-center">
          {/* Rooky the React Cat Mascot */}
          <div className="mascot-container d-flex flex-column align-items-center mb-4">
            <div className="mascot-bubble mb-3 text-start position-relative">
              {getMascotSpeech(progressPercent)}
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
              <span className="fs-1 animate-wave" style={{ cursor: 'pointer' }} title="야옹~">🐱⚛️</span>
              <span className="badge bg-cute-purple badge-cute py-1.5 px-3 shadow-sm" style={{ fontSize: '0.8rem' }}>리액캣 루키 (Rooky)</span>
            </div>
          </div>

          <h1 className="display-4 fw-bold mb-2" style={{ color: 'var(--text-dark)', textShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
            KOSMO React Lab 🧪
          </h1>
          <p className="lead text-muted mx-auto mb-4" style={{ maxWidth: '650px', fontSize: '1.1rem' }}>
            리액트 5대 프로젝트와 진도 체크를 게임 퀘스트를 깨듯 신나게 탐험해 보세요!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#projects" className="btn btn-cute btn-cute-primary px-4 py-2">
              <i className="bi bi-play-circle-fill me-2"></i>프로젝트 실행
            </a>
            <a href="#lectures" className="btn btn-cute btn-cute-purple px-4 py-2">
              <i className="bi bi-clipboard2-check-fill me-2"></i>퀘스트 깨러가기
            </a>
          </div>
        </div>
      </div>

      {/* 3. Five Major Projects Section */}
      <section id="projects" className="mb-5">
        <div className="d-flex align-items-center gap-2 mb-4">
          <span className="fs-3">⭐</span>
          <h2 className="m-0 h3 text-dark" style={{ fontFamily: 'var(--heading)' }}>5대 실전 프로젝트 플레이그라운드</h2>
          <span className="badge bg-cute-pink badge-cute ms-2">구동 가능</span>
        </div>

        <div className="row g-4">
          {PROJECT_DATA.map((proj) => (
            <div key={proj.id} className="col-12 col-md-6 col-lg-4">
              <div className={`card h-100 border-0 glass-card p-4 d-flex flex-column ${proj.glowClass}`}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="p-3 rounded-4 bg-light d-flex align-items-center justify-content-center animate-bounce-slow" style={{ width: '56px', height: '56px' }}>
                    <i className={`bi ${proj.icon} fs-3`} style={{ color: proj.color }}></i>
                  </div>
                  <span className={`badge ${proj.badgeClass} badge-cute`}>{proj.badge}</span>
                </div>
                
                <h3 className="h5 fw-bold text-dark mb-2" style={{ fontFamily: 'var(--heading)' }}>{proj.title}</h3>
                <p className="text-muted small mb-4 flex-grow-1" style={{ lineHeight: '1.5' }}>{proj.desc}</p>
                
                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                  <span className="text-muted small"><i className="bi bi-activity me-1"></i>Active</span>
                  <a
                    href={proj.link}
                    className="btn btn-cute btn-cute-primary btn-sm px-3"
                    style={{ background: `linear-gradient(135deg, ${proj.color} 0%, ${proj.color}dd 100%)` }}
                  >
                    실행하기 <i className="bi bi-arrow-right-short ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Widgets Row (Notepad + Random Quotes) */}
      <div className="row g-4 mb-5">
        {/* Memo Notepad */}
        <div className="col-12 col-lg-7">
          <div className="card h-100 border-0 glass-card p-4 glow-pink">
            <h3 className="h5 fw-bold text-dark mb-3">
              <i className="bi bi-pencil-square me-2 text-danger"></i>루키의 노란 메모장 📝
            </h3>
            <textarea
              className="form-control border-0 p-3 bg-light rounded-4 text-dark"
              rows="5"
              value={devNote}
              onChange={(e) => setDevNote(e.target.value)}
              placeholder="오늘 배운 리액트 지식이나 해결한 버그를 기록해보세요! 브라우저를 껐다 켜도 안전하게 보관해 둔다냥!"
              style={{ resize: 'none', fontSize: '0.95rem', minHeight: '140px', borderLeft: '4px solid #fff37a' }}
            />
            <div className="text-end text-muted small mt-2">
              <i className="bi bi-cloud-check-fill me-1 text-success"></i>로컬에 자동 저장중
            </div>
          </div>
        </div>

        {/* Quote Generator */}
        <div className="col-12 col-lg-5">
          <div className="card h-100 border-0 glass-card p-4 glow-purple d-flex flex-column justify-content-between">
            <div>
              <h3 className="h5 fw-bold text-dark mb-3">
                <i className="bi bi-chat-quote-fill me-2 text-warning"></i>오늘의 개발 응원 한마디 💬
              </h3>
              
              <div 
                className="bg-light p-4 rounded-4 text-center my-3"
                style={{ 
                  opacity: animateQuote ? 0 : 1, 
                  transition: 'opacity 0.2s ease',
                  minHeight: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}
              >
                <p className="fw-bold mb-2 text-dark" style={{ fontSize: '0.98rem', lineHeight: '1.4' }}>
                  "{DEV_QUOTES[quoteIdx].text}"
                </p>
                <small className="text-muted">- {DEV_QUOTES[quoteIdx].author}</small>
              </div>
            </div>

            <button 
              onClick={handleNextQuote}
              className="btn btn-cute btn-cute-purple w-100 py-2 mt-2"
            >
              새로운 메세지 보기 <i className="bi bi-arrow-clockwise ms-1"></i>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Lecture Checklist Tracker */}
      <section id="lectures" className="mb-4">
        <div className="glass-card p-4 p-md-5 glow-mint">
          <div className="row align-items-center mb-4 g-3">
            <div className="col-12 col-md-6">
              <div className="d-flex align-items-center gap-2">
                <span className="fs-3">📚</span>
                <h2 className="m-0 h3 text-dark">React 핵심 이론 및 실습 퀘스트</h2>
              </div>
              <p className="text-muted small mt-1 mb-0">
                11단계의 실습 폴더를 정복해 보라옹! 하트를 클릭하면 보석 스파클이 튑니다.
              </p>
            </div>
            
            <div className="col-12 col-md-6 text-md-end">
              <div className="d-inline-block bg-white px-4 py-2 rounded-4 shadow-sm border text-start" style={{ minWidth: '220px' }}>
                <div className="d-flex justify-content-between mb-1">
                  <span className="fw-bold text-muted small">공부 진행률</span>
                  <span className="fw-bold text-dark small">{progressPercent}% ({completedCount}/{totalLectures})</span>
                </div>
                <div className="progress-bar-cute">
                  <div className="progress-inner-cute" style={{ width: `${progressPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {LECTURE_DATA.map((lec) => (
              <div key={lec.id} className="col-12 col-md-6">
                <label 
                  onClick={(e) => handleToggleLecture(lec.id, e)}
                  className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-white border border-light shadow-sm w-100 position-relative overflow-hidden" 
                  style={{ 
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    borderLeft: lectureProgress[lec.id] ? '6px solid #ff7b90' : '6px solid #eae6f0',
                    transform: lectureProgress[lec.id] ? 'scale(1.01)' : 'scale(1)',
                    boxShadow: lectureProgress[lec.id] ? '0 8px 16px rgba(255, 123, 144, 0.08)' : '0 4px 10px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Local Particle Sparkle rendering */}
                  {particles.map((p) => (
                    <div
                      key={p.id}
                      className="particle-sparkle"
                      style={{
                        left: p.x,
                        top: p.y,
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        '--dx': p.dx,
                        '--dy': p.dy
                      }}
                    />
                  ))}

                  <div className="d-flex align-items-center gap-3">
                    <span className="fs-4">{lec.emoji}</span>
                    <div className="text-start">
                      <div className="d-flex align-items-center gap-2">
                        <span className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>{lec.title}</span>
                        <span className="badge rounded-pill bg-light text-muted border small px-2 py-1" style={{ fontSize: '0.68rem' }}>{lec.tag}</span>
                      </div>
                      <div className="text-muted small text-truncate" style={{ fontSize: '0.8rem', maxWidth: '280px' }}>
                        {lec.desc}
                      </div>
                    </div>
                  </div>
                  
                  {/* Custom Heart Checkbox style */}
                  <div className={`ms-2 ${lectureProgress[lec.id] ? 'pop-active' : ''}`}>
                    {lectureProgress[lec.id] ? (
                      <i className="bi bi-heart-fill text-danger fs-4"></i>
                    ) : (
                      <i className="bi bi-heart text-muted fs-4"></i>
                    )}
                  </div>
                </label>
              </div>
            ))}
          </div>

          {progressPercent === 100 && (
            <div className="mt-4 p-4 rounded-4 bg-cute-pink border text-center animate-bounce-slow" style={{ borderStyle: 'dashed' }}>
              <h4 className="fw-bold text-danger mb-1">🎉 냐아옹! 모든 리액트 미션을 클리어했다옹! 🎉</h4>
              <p className="text-danger small mb-0">진짜 최강의 마스터 리액트 개발자가 탄생했다냥! 언제든 나만의 앱을 만들어보라옹!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
