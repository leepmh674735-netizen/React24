import { useState } from 'react';

function ArticleEdit(props) {
    // 1. 전달받은 게시글 데이터로 초기 상태(State) 설정
    const [title, setTitle] = useState(props.selectRow.title);
    const [writer, setWriter] = useState(props.selectRow.writer);
    const [contents, setContents] = useState(props.selectRow.contents);

    return (
        <article>
            <form onSubmit={(event) => {
                event.preventDefault();
                
                // 3. 부모 컴포넌트(App.jsx)의 수정 함수 호출
                props.editAction(props.selectRow.no, writer, title, contents);
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
                                    cols="25" 
                                    rows="3"
                                    value={contents} 
                                    onChange={(event) => setContents(event.target.value)}
                                ></textarea>
                            </td>
                        </tr>
                        {/* 2. 테이블 내부에 자연스럽게 버튼 행 추가 */}
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center' }}>
                                <input type="submit" value="수정하기" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </article>
    );
}

export default ArticleEdit;
