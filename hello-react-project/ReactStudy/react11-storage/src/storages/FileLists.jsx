import { storage } from "../storageConfig";
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { useState, useEffect } from "react";
import { useParams, NavLink } from 'react-router-dom';

const FileLists = () => {
    const params = useParams();
    const rawPath = params.path || params['*'];
    const paramPath = (!rawPath || rawPath === 'undefined') ? '' : rawPath;

    const [files, setFiles] = useState([]);
    const [folders, setFolders] = useState([]);
    const [renderFlag, setRenderFlag] = useState(false);

    useEffect(() => {
        const myPathRef = ref(storage, paramPath);

        listAll(myPathRef)
            .then(async (res) => {
                setFolders(res.prefixes);

                const itemsWithUrl = await Promise.all(
                    res.items.map(async (itemRef) => {
                        try {
                            const url = await getDownloadURL(itemRef);
                            return { name: itemRef.name, fullPath: itemRef.fullPath, url };
                        } catch (error) {
                            console.log("이미지 다운로드 중 에러", error);
                            return { name: itemRef.name, fullPath: itemRef.fullPath, url: '' };
                        }
                    })
                );
                setFiles(itemsWithUrl);
            })
            .catch((error) => {
                console.log('파일 목록 출력중 에러 발생', error);
            });
    }, [renderFlag, paramPath]);

    const handleDelete = (fileFullPath) => {
        if (window.confirm('삭제할까요?')) {
            const deleteRef = ref(storage, fileFullPath);
            deleteObject(deleteRef)
                .then(() => {
                    console.log("파일 삭제 성공");
                    alert("삭제되었습니다.");
                    setRenderFlag(!renderFlag);
                })
                .catch((error) => {
                    console.log("파일 삭제 실패", error);
                });
        }
    };

    return (
        <>
            <h2>Storage - 파일 및 폴더 목록</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>경로 / 이름</th>
                        <th>미리보기</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {folders.map((folder) => (
                        <tr key={folder.name}>
                            <td>
                                <NavLink to={`/files/${paramPath ? paramPath + '/' : ''}${folder.name}`}>
                                    📁 {folder.name}
                                </NavLink>
                            </td>
                            <td colSpan="2">폴더</td>
                        </tr>
                    ))}

                    {files.map((file) => (
                        <tr key={file.name}>
                            <td>{file.name}</td>
                            <td>
                                {file.url ? (
                                    <img src={file.url} alt={file.name} width="200" />
                                ) : (
                                    "이미지 없음"
                                )}
                            </td>
                            <td>
                                <button type='button' onClick={() => handleDelete(file.fullPath)}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default FileLists;