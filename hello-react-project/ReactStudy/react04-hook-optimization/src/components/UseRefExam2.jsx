import { useEffect, useRef } from 'react';

const UseRefExam2 = () => {
    const passRef1 = useRef();
    const passRef2 = useRef();

    useEffect(() => {
        passRef1.current.focus();
    }, []);

    const checkPassword = () => {
        if (!passRef1.current.value || !passRef2.current.value) {
            alert('비밀번호를 입력해주세요');
            passRef1.current.focus();
            return;
        }

        if (passRef1.current.value === passRef2.current.value) {
            alert('비밀번호 확인이 완료되었습니다.');
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    };

    return (
        <>
            <h2>useRef 사용하기2</h2>
            <form>
                패스워드1 : <input type='password' ref={passRef1} /> <br />
                패스워드2 : <input type='password' ref={passRef2} /> <br />
                <button type='button' onClick={checkPassword}>
                    패스워드 확인
                </button>
            </form>
        </>
    );
};

export default UseRefExam2;