import '../Chat.css';
import { realtime } from '../realtimeConfig';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ref, push, child, set, onValue } from 'firebase/database';

const scrollTop = (chatWindowElement) => {
    if (chatWindowElement) {
        chatWindowElement.scrollTop = chatWindowElement.scrollHeight;
    }
};

function ChatMessage() {
    const [searchParams] = useSearchParams();
    const roomId = searchParams.get('roomId');
    const userId = searchParams.get('userId');
    
    const chatWindowRef = useRef();
    const [chatData, setChatData] = useState([]);

    function messageWrite(chatRoom, chatId, chatMessage) {
        const newPostKey = push(child(ref(realtime), 'tempValue')).key;
        set(ref(realtime, chatRoom + '/' + newPostKey), {
            id: chatId,
            message: chatMessage
        });
        console.log('입력성공');
    }

    useEffect(() => {
        if (!roomId) return;
        
        const dbRef = ref(realtime, roomId);
        const unsubscribe = onValue(dbRef, (snapshot) => {
            let showDiv = [];
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                
                if (childData.id === userId) {
                    showDiv.push(
                        <div key={childKey} style={{ 'textAlign': 'right', 'margin': '5px 0' }}>
                            <b>{childData.id}: </b> {childData.message}
                        </div>
                    );
                } else {
                    showDiv.push(
                        <div key={childKey} style={{ 'textAlign': 'left', 'margin': '5px 0' }}>
                            <b>{childData.id}: </b> {childData.message}
                        </div>
                    );
                }
            });
            setChatData(showDiv);
            
            setTimeout(() => {
                scrollTop(chatWindowRef.current);
            }, 200);
        });

        return () => unsubscribe();
    }, [roomId, userId]);

    return (
        <>
            <h2>Realtime 채팅</h2>
            <div style={{ marginBottom: '10px' }}>
                대화명 : <input type="text" id="chatId" value={userId || ''} readOnly />
                &nbsp;&nbsp;
                <button id="closeBtn" onClick={() => window.close()}>채팅종료</button>
            </div>

            <div id="ChatWindow" ref={chatWindowRef}>
                {chatData}
            </div>

            <form onSubmit={(e) => {
                e.preventDefault();
                let chatRoom = e.target.chatRoom.value;
                let chatId = e.target.chatId.value;
                let message = e.target.message.value;
                
                if (message.trim() === '') {
                    alert('메세지를 입력하세요');
                    return;
                }
                messageWrite(chatRoom, chatId, message);
                e.target.message.value = '';
            }}>
                <input type='hidden' name='chatRoom' value={roomId || ''} />
                <input type='hidden' name='chatId' value={userId || ''} />
                <input type='text' name='message' placeholder='메시지를 입력하세요...' />
                <button type='submit' id="sendBtn">전송</button>
            </form>
        </>
    );
}

export default ChatMessage;