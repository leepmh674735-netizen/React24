import React from 'react';

const BackComp = ({ onMyEvent2 }) => {
    return (
        <>
            <li>
                <a href="/" onClick={(event) => {
                    event.preventDefault();
                    onMyEvent2('백엔드 클릭됨(자식전달)');
                }}>
                    백엔드
                </a>
            </li>
            <ul>
                <li>Java</li>
                <li>Oracle</li>
                <li>JSP</li>
                <li>Spring Boot</li>
            </ul>
        </>
    );
};

function FrontComp({ onMyEvent1 }) {
    return (
        <>
            <li>프론트엔드</li>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Javascript</li>
                <li>jQuery</li>
            </ul>
            <BackComp onMyEvent2={onMyEvent1} />
        </>
    );
}

function App() {
    return (
        <div>
            <h2>React-Event</h2>
            <ol>
                <FrontComp onMyEvent1={(msg) => {
                    alert(msg);
                }} />
            </ol>
        </div>
    );
}

export default App;