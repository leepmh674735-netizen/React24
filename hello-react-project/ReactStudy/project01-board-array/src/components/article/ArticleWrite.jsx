function ArticleWrite(props) {
    return (
        <article>
            <form onSubmit={(e) => {
                e.preventDefault();
                const writer = e.target.writer.value;
                const title = e.target.title.value;
                const contents = e.target.contents.value;
                props.onWrite(writer, title, contents);
            }}>
                <table id="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td>
                                <input type="text" name="writer" required />
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input type="text" name="title" required />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea name="contents" cols="22" rows="3" required></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="전송" />
            </form>
        </article>
    );
}

export default ArticleWrite;