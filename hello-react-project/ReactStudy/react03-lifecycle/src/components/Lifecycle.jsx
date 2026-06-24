import React, { useState, useEffect } from 'react';

function MoveBox(props) {
    console.log('LifeCycle==>1.컴포넌트 실행( 함수 호출)');

    const [position, setPosition] = useState(props.initPosition);
    const [leftCount, setLeftCount] = useState(1);

    const boxStyle = {
        backgroundColor: 'red',
        position: 'relative',
        textAlign: 'center',
        width: '100px',
        height: '100px',
        margin: '10px',
        lineHeight: '100px',
        left: `${position}px`
    };

    const moveLeft = () => {
        setPosition(position - 20);
        setLeftCount(leftCount + 1);
    };

    const moveRight = () => {
        setPosition(position + 20);
    };

    useEffect(() => {
        console.log('useEffect 실행==>3.컴포넌트 마운트 또는 의존성 배열 변경됨');
        return () => {
            console.log('useEffect 실행==>4.컴포넌트 언마운트 또는 다음 useEffect 실행 전 정리(cleanup)');
        };
    }, [leftCount]);

    console.log('return실행==>2.랜더링(return문))');

    return (
        <div>
            <h4>함수형 컴포넌트의 생명주기</h4>
            <div style={boxStyle}>{leftCount}</div>
            <button type="button" onClick={moveLeft}>좌측이동</button>
            <button type="button" onClick={moveRight}>우측이동</button>
        </div>
    );
}

function LifeCycle() {
    return (
        <>
            <h2>React Hook - useEffect</h2>
            <MoveBox initPosition={50} />
        </>
    );
}

export default LifeCycle;