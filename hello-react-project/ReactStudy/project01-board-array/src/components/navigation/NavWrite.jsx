function NavWrite(props) {
    return (
        <nav>
            <a href="/" onClick={function(event){
                event.preventDefault();
                props.onChangeMode('list');
            }}>
                목록
            </a>
        </nav>
    );
}

export default NavWrite;

