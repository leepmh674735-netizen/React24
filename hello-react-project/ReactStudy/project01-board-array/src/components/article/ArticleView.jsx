function ArticleView(props) {
    return (
        <article>
            <table id="boardTable">
                <colgroup>
                    <col width="30%" />
                    <col width="*" />
                </colgroup>
                <tbody>
                    <tr>
                        <th>작성자</th>
                        <td>{props.post.writer}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td>{props.post.title}</td>
                    </tr>
                    <tr>
                        <th>날짜</th>
                        <td>{props.post.date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            {props.post.contents}
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
}

export default ArticleView;