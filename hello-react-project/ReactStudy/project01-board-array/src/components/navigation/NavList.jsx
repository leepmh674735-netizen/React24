function NavList(props) {
    return (
        <nav>
            <a href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode('WRITE');
            }}>글쓰기</a>
        </nav>
    );
}

export default NavList;
