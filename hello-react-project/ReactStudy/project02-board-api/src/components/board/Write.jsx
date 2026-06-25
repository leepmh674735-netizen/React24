import { Link, useNavigate } from 'react-router-dom';

function Write() {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <h2>게시판-작성</h2>
            </header>
            <nav>
                <Link to="/list">목록</Link>
            </nav>
            <article>
                <form onSubmit={(event) => {
                    event.preventDefault();

                    fetch('https://nakja.co.kr/APIs/php7/boardWriterJSON.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        body: new URLSearchParams({
                            tname: 'board_apis',
                            name: event.target.name.value,
                            title: event.target.title.value,
                            contents: event.target.contents.value,
                            apikey: '본인의APIKey',
                        }).toString(),
                    })
                        .then((response) => response.json())
                        .then((json) => {
                            console.log(json);
                            navigate("/list");
                        })
                        .catch((err) => console.error(err));
                }}>
                    <table id='boardTable'>
                        <tbody>
                            <tr>
                                <th>작성자</th>
                                <td><input type='text' name='name' /></td>
                            </tr>
                            <tr>
                                <th>제목</th>
                                <td><input type='text' name='title' /></td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td><textarea name="contents" rows="3"></textarea></td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ textAlign: 'center' }}>
                                    <input type="submit" value="작성" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </article>
        </>
    );
}

export default Write;