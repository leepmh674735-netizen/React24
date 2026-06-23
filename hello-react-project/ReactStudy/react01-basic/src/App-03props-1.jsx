import React from 'react';

function FrontComp({ propData1, frTitle }) {
    return (
        <>
            <li>{frTitle}</li>
            <ul>
                {propData1.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

const BackComp = ({ propData2, baTitle }) => {
    return (
        <>
            <li>{baTitle}</li>
            <ul>
                {propData2.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

function App() {
    const frontData = ['HTML5', 'CSS3', 'Javascript', 'jQuery'];
    const backData = ['Java', 'Oracle', 'JSP', 'Spring Boot'];

    return (
        <div>
            <h2>React-Props</h2>
            <ol>
                <FrontComp propData1={frontData} frTitle="프론트엔드" />
                <BackComp propData2={backData} baTitle="백엔드" />
            </ol>
        </div>
    );
}

export default App;