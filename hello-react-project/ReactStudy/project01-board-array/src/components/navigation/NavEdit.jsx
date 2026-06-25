function NavEdit(props) {
    return (
        <nav>
            <a 
                href="/" 
                onClick={(event) => {
                    event.preventDefault();
                    props.onBack();
                }}
            >
                뒤로가기
            </a>
        </nav>
    );
}

export default NavEdit;