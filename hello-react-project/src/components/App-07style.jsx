import React from 'react';
import jqueryLogo from './assets/jqueryLogo.png';

function App() {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Verdana"
    };

    const iWidth = { maxWidth: '300px' };

    return (
        <>
            <h2>React-Style</h2>
            <ol>
                <li style={{ color: "red" }}>프론트엔드</li>
                <ul>
                    <li><img src="/img/html_css_js.png" alt="HTML/CSS/JS" style={iWidth} /></li>
                    <li><img src={jqueryLogo} alt="jQuery" style={iWidth} /></li>
                    <li><img src="http://nakja.co.kr/images/reactjs.png" alt="React" style={iWidth} /></li>
                </ul>
            </ol>
            <ol>
                <li className='backEnd'>백엔드</li>
                <li id='backEndSub'>Java</li>
                <li className='warnings'>Oracle</li>
                <li style={myStyle}>JSP</li>
                <li>Spring Boot</li>
            </ol>
        </>
    );
}

export default App;