import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function List() {
    const [boardData, setBoardData] = useState([]);
    
    let requestUrl = "https://nakja.co.kr/APIs/php7/boardListJSON.php";
    let parameter = "tname=board_apis";
    parameter += "&apikey=본인의APIKey";

    useEffect(() => {
        fetch(requestUrl + "?" + parameter)
            .then((result) => result.json())
            .then((json) => {
                setBoardData(json);
            })
            .catch((err) => console.error(err));
    }, [requestUrl, parameter]);

    let lists = boardData.map((row) => {
        let data = row.regdata ? row.regdata.substring(0, 10) : "";
        let subject = row.subject ? row.subject.substring(0, 20) : "";
        
        return (
            <tr key={row.idx}>
                <td className="cen">{row.idx}</td>
                <td><Link to={"/view/" + row.idx}>{subject}</Link></td>
                <td className="cen">{row.name}</td>
                <td className="cen">{data}</td>
            </tr>
        );
    });

    return (
        <>
            <header>
                <h2>게시판 - 목록</h2>
            </header>
            <nav>
                <Link to="/write">글쓰기</Link>
            </nav>
            <article>
                <table id="boardTable">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lists}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default List;