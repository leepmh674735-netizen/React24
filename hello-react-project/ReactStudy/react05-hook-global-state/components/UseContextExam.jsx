import { useContext } from "react";
import { ThemeProvider, ThemeContext } from "../contexts/ThemeContext";
import ThemeBox from "../contexts/ThemeBox";

const ThemeToggleButton = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>테마 전환</button>;
};

const UseContextExam = () => {
    return (
        <>
            <h2>useContext 사용하기</h2>
            <ThemeProvider>
                <ThemeToggleButton />
                <ThemeBox />
            </ThemeProvider>
        </>
    );
};

export default UseContextExam;