import { NavLink } from "react-router-dom";

const TopNavi = () => {
    return (
        <nav>
            <NavLink to="/upload">업로드</NavLink>&nbsp;
            <NavLink to="/fileLists">목록보기</NavLink>
        </nav>
    );
}

export default TopNavi;