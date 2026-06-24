import { useState } from 'react';
import { realtime } from '../realtimeConfig';
import { ref, get, set, child, push, update, remove } from "firebase/database";
import TopNavi from '../components/TopNavi';

const RealtimeCRUD = () => {
    console.log("realtime", realtime);

    function writeUserData(userId, userName, userPass) {
        const newPostKey = push(child(ref(realtime), 'tempValue')).key;
        set(ref(realtime, 'users/' + userId), {
            name: userName,
            pass: userPass,
            fireKey: newPostKey
        });
        console.log('입력성공');
    }

    function readUserData(userId) {
        const dbRef = ref(realtime);
        get(child(dbRef, `users/${userId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log('데이터', snapshot.val());
                } else {
                    console.log("데이터 없음");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function editUserData(userId, userName, userPass) {
        const newPostKey = push(child(ref(realtime), 'tempValue')).key;
        const postData = {
            name: userName,
            pass: userPass,
            fireKey: newPostKey
        };
        const updates = {};
        updates['/users/' + userId] = postData;
        return update(ref(realtime), updates);
    }

    function deleteUserData1(userId) {
        const deletes = {};
        deletes['/users/' + userId] = null;
        return update(ref(realtime), deletes);
    }

    function deleteUserData2(userId) {
        remove(ref(realtime, 'users/' + userId))
            .then(() => {
                console.log('삭제성공');
            })
            .catch((error) => {
                console.error('삭제 실패', error);
            });
    }

    const [addNum, setAddNum] = useState(0);
    let adder = "-" + addNum;
    const id = 'nakja' + adder;
    const name = "낙자쌤" + adder;
    const pass = "xyz" + adder;

    return (
        <>
            <TopNavi />
            <h2>Realtime Database - CRUD</h2>

            <input type="number" value={addNum} onChange={e => setAddNum(e.target.value)} />
            
            <input type='button' value='입력' onClick={() => writeUserData(id, name, pass)} />
            
            <input type='button' value='읽기' onClick={() => readUserData(id)} />
            
            <input type='button' value='수정 테스트' onClick={() => editUserData(id, name + "(수정)", pass)} />
            
            <input type='button' value='삭제1' onClick={() => deleteUserData1(id)} />
            
            <input type='button' value='삭제2' onClick={() => deleteUserData2(id)} />
        </>
    );
};

export default RealtimeCRUD;