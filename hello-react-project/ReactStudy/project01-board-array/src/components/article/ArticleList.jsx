function ArticleList(props) {
    return (
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
                    {props.boardData.map((row) => (
                        <tr key={row.no}>
                            <td className="cen">{row.no}</td>
                            <td>
                                <a href="/" onClick={(e) => {
                                    e.preventDefault();
                                    props.onChangeMode('VIEW', row.no);
                                }}>
                                    {row.title}
                                </a>
                            </td>
                            <td className="cen">{row.writer}</td>
                            <td className="cen">{row.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}

export default ArticleList;