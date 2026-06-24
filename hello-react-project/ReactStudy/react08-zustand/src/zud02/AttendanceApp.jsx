import { useState } from 'react';
import useStudentStore from '../exam2/useStudentStore';
import StudnetUnit from '../exam2/StudentUnit';

export default function AttendanceApp() {
    const [name, setName] = useState('');
    const { addStudent, students, count } = useStudentStore();

    return (<>
        <h2>출결관리App</h2>
        <p>총학생 수: {count}</p>

        <input type="text" placeholder="이름입력을 입력하세요"
            value={name} onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => {
            if (name.trim()) {
                addStudent(name);
                setName('');
            }
        }}>추가</button>
        <ol>
            {students.map((student) => (
                <StudnetUnit key={student.id} {...student} />
            ))}
        </ol>
    </>);
}