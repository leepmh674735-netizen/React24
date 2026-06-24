import { NavLink } from "react-router-dom";

const TopNavi = () => {
    return (
        <>
            <nav>
                <NavLink to="/crud">CRUD</NavLink>&nbsp;
                <NavLink to="/listen">Listener</NavLink>&nbsp;
                <NavLink to="/chat">Chating</NavLink>&nbsp;
            </nav>
        </>
    );
};

export default TopNavi;