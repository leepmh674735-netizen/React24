import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const logger = (config) => (set, get, api) =>
    config(
        (...args) => {
            console.log('[Zustand 로그]', ...args);
            set(...args);
        },
        get,
        api
    );

const useStudentStore = create(
    logger(
        devtools(
            persist(
                (set) => ({
                    students: [{ id: Date.now(), name: '섬유겸', isHere: false }],
                    count: 1,
                    addStudent: (name) =>
                        set((state) => ({
                            students: [...state.students, { id: Date.now(), name, isHere: false }],
                            count: state.count + 1,
                        }), false, 'addStudent'),
                    deleteStudent: (id) =>
                        set((state) => ({
                            students: state.students.filter((student) => student.id !== id),
                            count: state.count - 1,
                        }), false, 'deleteStudent'),
                    toggleHere: (id) =>
                        set((state) => ({
                            students: state.students.map((student) =>
                                student.id === id ? { ...student, isHere: !student.isHere } : student
                            ),
                        }), false, 'toggleAttendance'),
                }),
                { name: 'student-storage' }
            ),
            { name: 'StudentStore' }
        )
    )
);

export default useStudentStore;