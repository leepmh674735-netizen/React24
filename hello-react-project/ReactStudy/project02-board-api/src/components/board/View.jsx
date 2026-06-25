import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';

function View() {
    const params = useParams();
    const navigate = useNavigate();
    const [boardData, setBoardData] = useState({});

    let requestUrl = "https://nakja.co.kr/APIs/php7/boardViewJSON.php";
    let parameter = `tname=board_apis&idx=${params.idx}&apikey=본인의APIKey`;

    useEffect(() => {
        fetch(requestUrl + "?" + parameter)
            .then((result) => result.json())
            .then((json) => {
                setBoardData(json);
            })
            .catch((err) => console.error(err));
    }, [requestUrl, parameter]);

    const handleDelete = () => {
        if (window.confirm('삭제하시겠습니까?')) {
            fetch("https://nakja.co.kr/APIs/php7/boardDeleteJSON.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams({
                    tname: 'board_apis',
                    idx: params.idx,
                    apikey: '본인의APIKey',
                }).toString(),
            })
            .then((result) => result.json())
            .then((json) => {
                if (json.result === "success") {
                    alert('삭제되었습니다.');
                    navigate("/list");
                } else {
                    alert("삭제실패");
                }
            })
            .catch((err) => console.error(err));
        }
    };

    return (
        <>
            <header>
                <h2>게시판-열람</h2>
            </header>

            <nav>
                <Link to="/list">목록</Link>&nbsp;
                <Link to={"/edit/" + params.idx}>수정</Link>&nbsp;
                <button 
                    onClick={handleDelete} 
                    style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}
                >
                    삭제
                </button>
            </nav>

            <article>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td>{boardData.name}</td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td>{boardData.regdate}</td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>{boardData.subject}</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td
                                dangerouslySetInnerHTML={{ __html: boardData.contents }}
                                style={{ whiteSpace: 'pre-wrap' }}
                            ></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default View;