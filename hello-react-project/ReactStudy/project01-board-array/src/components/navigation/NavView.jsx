function NavView(props) {
    return (
        <nav>
            <a href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode('LIST');
            }}>목록</a>&nbsp;
            <a href="/" onClick={(e) => {
                e.preventDefault();
                alert('수정 기능은 선택사항입니다.');
            }}>수정</a>&nbsp;
            <a href="/" onClick={(e) => {
                e.preventDefault();
                props.onDelete();
            }}>삭제</a>
        </nav>
    );
}

export default NavView;
