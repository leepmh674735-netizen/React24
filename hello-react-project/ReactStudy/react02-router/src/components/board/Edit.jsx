import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

function Edit() {
    const params = useParams();
    const navigate = useNavigate();

    let requestUrl = "https://nakja.co.kr/APIs/php7/boardViewJSON.php";
    let parameter = "tname=board_apis&idx=" + params.idx;
    parameter += "&apikey=본인의APIKey";

    const [writer, setWriter] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    useEffect(() => {
        fetch(requestUrl + "?" + parameter)
            .then((result) => result.json())
            .then((json) => {
                setWriter(json.name || '');
                setTitle(json.subject || '');
                setContents(json.contents || '');
            })
            .catch((err) => console.error(err));
    }, [requestUrl, parameter]);

    return (
        <>
            <header>
                <h2>게시판 수정</h2>
            </header>
            <nav>
                <Link to="/list">목록</Link>
            </nav>
            <article>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    
                    fetch('https://nakja.co.kr/APIs/php7/boardUpdateJSON.php', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        },
                        body: new URLSearchParams({
                            tname: 'board_apis',
                            idx: params.idx,
                            name: writer,
                            subject: title,
                            content: contents,
                            apikey: '본인의APIKey',
                        }).toString()
                    })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json);
                        navigate("/view/" + params.idx);
                    })
                    .catch((err) => console.error(err));
                }}>
                    <table id="boardTable">
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td>
                                    <input 
                                        type="text" 
                                        name="writer" 
                                        value={writer}
                                        onChange={(event) => setWriter(event.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>제목</th>
                                <td>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>
                                    <textarea 
                                        name="contents" 
                                        rows="3" 
                                        value={contents}
                                        onChange={(event) => setContents(event.target.value)}
                                    ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center' }}>
                                    <input type="submit" value="수정" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </article>
        </>
    );
}

export default Edit;