import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TopNavi = () => {
    return (
        <nav>
            <Link to="/">Home</Link>&nbsp;
            <NavLink to="/intro">인트로</NavLink>&nbsp;
            <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
            <Link to="/xyz">잘못된URL</Link>&nbsp;
        </nav>
    );
};

export default TopNavi;