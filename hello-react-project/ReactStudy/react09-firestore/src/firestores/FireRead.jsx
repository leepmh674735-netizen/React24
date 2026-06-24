import { firestore } from "../firestoreConfig";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const FireRead = () => {
    const [members, setMembers] = useState([]);
    const [isRender, setIsRender] = useState(true);

    useEffect(() => {
        const getCollection = async () => {
            const querySnapshot = await getDocs(collection(firestore, "members"));
            const dataArray = [];
            querySnapshot.forEach((row) => {
                dataArray.push({ id: row.id, ...row.data() });
            });
            setMembers(dataArray);
        };
        getCollection();
    }, [isRender]);

    return (
        <>
            <h2>Firestore - 목록</h2>
            <table border='1'>
                <thead>
                    <tr className='text-center'>
                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>이름</th>
                        <th>가입일</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.pass}</td>
                            <td>{member.name}</td>
                            <td>{member.regdate}</td>
                            <td>
                                <NavLink to={"/update/" + member.id}>[수정]</NavLink>
                                &nbsp;
                                <span 
                                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                                    onClick={async () => {
                                        if (window.confirm('삭제할까요?')) {
                                            await deleteDoc(doc(firestore, "members", member.id));
                                            alert("삭제되었습니다.");
                                            setIsRender(prev => !prev);
                                        }
                                    }}
                                >
                                    [삭제]
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FireRead;