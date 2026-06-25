import { useState } from 'react';
import NavList from "./components/navigation/NavList";
import NavWrite from "./components/navigation/NavWrite";
import NavView from "./components/navigation/NavView";
import NavEdit from "./components/navigation/NavEdit";
import ArticleList from "./components/article/ArticleList";
import ArticleView from "./components/article/ArticleView";
import ArticleWrite from "./components/article/ArticleWrite";
import ArticleEdit from "./components/article/ArticleEdit";

function Header(props) {
    return (
        <header>
            <h2>{props.title}</h2>
        </header>
    );
}

function App() {
    const [boardData, setBoardData] = useState([
        {
            no: 1,
            title: "오늘은 리액트 공부하는날",
            writer: "낙자쌤",
            date: "2025-01-01",
            contents: "리액트를 뽀개봅이당"
        },
        {
            no: 2,
            title: "어제는 자바스크립트 공부했음",
            writer: "유겸쌤",
            date: "2025-02-02",
            contents: "자바스크립트는 할 게 너무 많아요",
        },
        {
            no: 3,
            title: "내일은 프로젝트 만들어야징",
            writer: "미르쌤",
            date: "2025-03-03",
            contents: "프로젝트는 뭘 만들어볼까?"
        },
    ]);

    const [mode, setMode] = useState('list');
    const [selectNo, setSelectNo] = useState(1);
    const [nextNo, setNextNo] = useState(4);

    const handleWrite = (writer, title, contents) => {
        const newPost = {
            no: nextNo,
            title: title,
            writer: writer,
            date: new Date().toISOString().slice(0, 10),
            contents: contents
        };
        setBoardData([...boardData, newPost]);
        setNextNo(nextNo + 1);
        setMode('list');
    };

    const handleDelete = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const filteredData = boardData.filter(post => post.no !== selectNo);
            setBoardData(filteredData);
            setMode('list');
        }
    };

    const handleEdit = (no, writer, title, contents) => {
        const updatedData = boardData.map(post =>
            post.no === no ? { ...post, writer, title, contents } : post
        );
        setBoardData(updatedData);
        setMode('view');
    };

    let headerTitle = "";
    let navComponent = null;
    let articleComponent = null;

    if (mode === 'list') {
        headerTitle = "게시판-목록";
        navComponent = <NavList onChangeMode={(m) => setMode(m)} />;
        articleComponent = (
            <ArticleList
                boardData={boardData}
                onChangeMode={(m, no) => {
                    setMode(m);
                    if (no) setSelectNo(no);
                }}
            />
        );
    }
    else if (mode === "view") {
        headerTitle = "게시판-열람";
        navComponent = <NavView onChangeMode={(pmode) => setMode(pmode)} onDelete={handleDelete} />;
        const selectedPost = boardData.find(post => post.no === selectNo);
        articleComponent = <ArticleView post={selectedPost} />;
    }
    else if (mode === "write") {
        headerTitle = "게시판 쓰기";
        navComponent = <NavWrite onChangeMode={(m) => setMode(m)} />;
        articleComponent = <ArticleWrite onWrite={handleWrite} />;
    }
    else if (mode === 'edit') {
        headerTitle = '게시판 수정';
        navComponent = <NavEdit onChangeMode={(m) => setMode(m)} onBack={() => setMode('view')} />;
        const selectedPost = boardData.find(post => post.no === selectNo);
        articleComponent = <ArticleEdit selectRow={selectedPost} editAction={handleEdit} />;
    }

    return (
        <>
            <Header title={headerTitle} />
            {navComponent}
            {articleComponent}
        </>
    );
}

export default App;