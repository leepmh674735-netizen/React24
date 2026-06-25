import { useState } from "react";
import BoardView from "./components/BoardView";
import CommentBtn from "./components/CommentBtn";
import CommentList from "./components/CommentList";
import ModalWindow from "./components/ModalWindow";

function App() {
    const [boardData, setBoardData] = useState(() => {
        const saveData = localStorage.getItem('boardData');
        if (saveData) {
            return JSON.parse(saveData);
        }
        const initialData = [
            {
                idx: 1,
                writer: '낙자쌤',
                postdata: '2025-05-15 09:30',
                contents: '댓글 작성을 구현해봅니다.', 
                likes: 0
            }
        ];
        localStorage.setItem('boardData', JSON.stringify(initialData));
        return initialData;
    });
    const [iwriter, setIwriter] = useState('');
    const [icontents, setIcontents] = useState('');
    const [editIdx, setEditIdx] = useState(null);
    const [nextVal, setNextVal] = useState(() => {
        const saveSeq = localStorage.getItem('nextVal');
        if (saveSeq) {
            return Number(saveSeq);
        }
        localStorage.setItem('nextVal', '2');
        return 2;
    });

    const updateStorage = (data, seq) => {
        localStorage.setItem('boardData', JSON.stringify(data));
        localStorage.setItem('nextVal', seq);
    };

    const saveComment = () => {
        if (editIdx === null) {
            const sysdata = new Date().toISOString().slice(0, 16).replace('T', ' ');
            const nextData = {
                idx: nextVal,
                writer: iwriter,
                postdata: sysdata,
                contents: icontents,
                likes: 0
            };
            const updateData = [...boardData, nextData];
            
            setBoardData(updateData);
            setNextVal(nextVal + 1);
            updateStorage(updateData, nextVal + 1);
        } else {
            const updateData = boardData.map(row =>
                row.idx === editIdx ? {
                    ...row, 
                    writer: iwriter,
                    contents: icontents
                } : row
            );
            setBoardData(updateData);
            updateStorage(updateData, nextVal);
        }
        
        setIwriter('');
        setIcontents('');
    };

    const plusLikes = (idx) => {
        const updateData = boardData.map(row =>
            row.idx === idx ? { ...row, likes: row.likes + 1 } : row
        );
        setBoardData(updateData);
        updateStorage(updateData, nextVal);
    };

    const deleteComment = (idx) => {
        if (confirm('댓글을 삭제할까요?')) {
            const updateData = boardData.filter(row => row.idx !== idx);
            setBoardData(updateData);
            updateStorage(updateData, nextVal);
        }
    };

    const editComment = (idx) => {
        const selectedData = boardData.find(row => row.idx === idx);
        if (selectedData) {
            setEditIdx(idx);
            setIwriter(selectedData.writer);
            setIcontents(selectedData.contents);
        }
    };

    const newOpenModal = () => {
        setIwriter('');
        setIcontents('');
        setEditIdx(null);
    };

    return (
        <div className="container mt-4">
            <BoardView />
            <CommentBtn newOpenModal={newOpenModal} />
            
            <ModalWindow 
                saveComment={saveComment} 
                editIdx={editIdx} 
                iWriter={iwriter} 
                setIwriter={setIwriter}
                iContents={icontents} 
                setIcontents={setIcontents}
            />
            
            <CommentList 
                boardData={boardData} 
                plusLikes={plusLikes}
                editComment={editComment} 
                deleteComment={deleteComment}
            />
        </div>
    );
}

export default App;