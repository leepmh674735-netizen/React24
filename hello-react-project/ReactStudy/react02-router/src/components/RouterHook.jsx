import React from 'react';
import { useLocation, useSearchParams } from "react-router-dom";

const RouterHooks = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const mode = searchParams.get('mode') || 'list';
    const pageNum = searchParams.get('pageNum') || '1';
    
    const changeMode = () => {
        const nextMode = (mode === 'list') ? 'read' : 'list';
        setSearchParams({ mode: nextMode, pageNum });
    };

    return (
        <div>
            <h3>Router Hooks</h3>
            <p>현재 경로 (pathname): {location.pathname}</p>
            <p>현재 쿼리스트링 (search): {location.search}</p>
            <p>mode: {mode} / pageNum: {pageNum}</p>
            <button onClick={changeMode}>모드 전환</button>
        </div>
    );
};

export default RouterHooks;