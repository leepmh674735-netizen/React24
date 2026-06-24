function NavWrite(props) {
    return (
        <nav>
            <a href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode('LIST');
            }}>목록</a>
        </nav>
    );
}

export default NavWrite;

