import { useRef } from 'react';
import TopNavi from '../components/TopNavi';

const ChatStart = () => {
    const refRoom = useRef();
    const refId = useRef();

    const openChatWin = () => {
        if (!refId.current.value.trim()) {
            alert('대화명을 입력해 주세요.');
            return;
        }

        const url = `/chat/talk?roomId=${refRoom.current.value}&userId=${refId.current.value}`;
        window.open(url, '_blank', 'width=400, height=500');
        refId.current.value = '';
    };

    return (
        <>
            <TopNavi />
            <h2>Realtime Database - Chatting</h2>
            방이름 : <input type="text" name="roomId" defaultValue="myChating1" ref={refRoom} readOnly />
            <br />
            대화명 : <input type="text" name="userId" ref={refId} />
            <br />
            <button type="button" onClick={openChatWin}>채팅시작</button>
        </>
    );
};

export default ChatStart;