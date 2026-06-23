import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import UserMemoExam from './components/UseMemoExam';
import UseCallbackExam from './components/UseCallbackExam';
import UseExam1 from './components/UseRefExam1';
import UseRefExam2 from './components/UseRefExam2';
import UseIdExam from './components/UseIdExam';

function App() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#333', borderBottom: '2px solid #ddd', paddingBottom: '10px' }}>
                React Hook Optimization & Features
            </h1>
            
            {/* 네비게이션 탭 메뉴 */}
            <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <NavLink 
                    to="/memo" 
                    style={({ isActive }) => ({
                        padding: '10px 15px',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#007bff',
                        backgroundColor: isActive ? '#007bff' : '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontWeight: 'bold'
                    })}
                >
                    useMemo
                </NavLink>
                <NavLink 
                    to="/callback" 
                    style={({ isActive }) => ({
                        padding: '10px 15px',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#007bff',
                        backgroundColor: isActive ? '#007bff' : '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontWeight: 'bold'
                    })}
                >
                    useCallback
                </NavLink>
                <NavLink 
                    to="/ref1" 
                    style={({ isActive }) => ({
                        padding: '10px 15px',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#007bff',
                        backgroundColor: isActive ? '#007bff' : '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontWeight: 'bold'
                    })}
                >
                    useRef (State/Var)
                </NavLink>
                <NavLink 
                    to="/ref2" 
                    style={({ isActive }) => ({
                        padding: '10px 15px',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#007bff',
                        backgroundColor: isActive ? '#007bff' : '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontWeight: 'bold'
                    })}
                >
                    useRef (Focus)
                </NavLink>
                <NavLink 
                    to="/id" 
                    style={({ isActive }) => ({
                        padding: '10px 15px',
                        textDecoration: 'none',
                        color: isActive ? '#fff' : '#007bff',
                        backgroundColor: isActive ? '#007bff' : '#f8f9fa',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontWeight: 'bold'
                    })}
                >
                    useId
                </NavLink>
            </nav>

            {/* 컨텐츠 렌더링 영역 */}
            <div style={{ 
                padding: '20px', 
                border: '1px solid #ddd', 
                borderRadius: '8px', 
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                minHeight: '200px'
            }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/memo" replace />} />
                    <Route path="/memo" element={<UserMemoExam />} />
                    <Route path="/callback" element={<UseCallbackExam />} />
                    <Route path="/ref1" element={<UseExam1 />} />
                    <Route path="/ref2" element={<UseRefExam2 />} />
                    <Route path="/id" element={<UseIdExam />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
