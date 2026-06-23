function FrontComp(props) {

    return (<>
    <li><a href='/' onClick={()=>{
        props.onMyEvent1();
    }}>프론트엔드</a>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>jQuery</li>
        </ul>
    </li>
    </>)
}
function App() {
    return (<>
    <h2>React-Event</h2>
    <ol>

        <FrontComp onMyEvent1={()=>{
            alert('프롬트엔드 클릭됨(부모전달)');
        }}/>
    </ol>
    </>)
}
export default App