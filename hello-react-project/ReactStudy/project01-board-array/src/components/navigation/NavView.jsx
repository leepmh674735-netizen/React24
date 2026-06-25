function NavView(props) {
    return (
        <nav>
            <a 
                href="/" 
                onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode('list');
                }}
            >
                목록
            </a>
            {" "}&nbsp;
            <a 
                href="/" 
                onClick={(event) => {
                    event.preventDefault();
                    props.onChangeMode('edit'); // 수정 모드 진입
                }}
            >
                수정
            </a>
            {" "}
            <a 
                href="/" 
                onClick={(event) => {
                    event.preventDefault();
                    props.onDelete();
                }}
            >
                삭제
            </a>
        </nav>
    );
}

export default NavView;