import { NavLink } from 'react-router-dom';

const TopNavi = () => {
    return (
        <nav>
            <NavLink to="/RefuxBasicApp/">기본사용법</NavLink>&nbsp;
            <NavLink to="/TodoApp">할일 관리</NavLink>&nbsp;
        </nav>
    );
}

export default TopNavi;