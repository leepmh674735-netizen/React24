import useStudentStore from "./useStudentStore";

const StudnetUnit = ({ id, name, isHere }) => {
    const { deleteStudent, toggleHere } = useStudentStore();
    let nameStyle = {
        textDecoration: isHere ? 'line-through' : 'none',
        color: isHere ? 'gray' : 'black',
        cursor: 'pointer',
    };
    return (
        <div>
            <span style={nameStyle} onClick={() => toggleHere(id)} >
                {name}
            </span>
            <button onClick={() => {
                if (window.confirm('삭제할까요?')) {
                    deleteStudent(id);
                }
            }}>삭제</button>
        </div>
    );
};

export default StudnetUnit;
