import { useState } from "react";
import { storage } from "../storageConfig";
import { ref, uploadBytes } from "firebase/storage";

const FileUpload = () => {
    const imageRef = ref(storage, 'images/myFile.jpg');

    console.log('경로/파일명', imageRef.fullPath, imageRef.name);
    console.log('parent경로', imageRef.parent?.fullPath);
    console.log('root경로', imageRef.root?.fullPath);

    const [folder, setFolder] = useState('');

    return (
        <>
            <h2>Storage - 업로드</h2>
            <p>파일을 선택하면 즉시 업로드 됩니다.</p>
            폴더명 : <input
                type="text"
                name="folder"
                value={folder}
                onChange={(e) => setFolder(e.target.value)}
            />
            <br />
            <input
                type="file"
                name="myfile"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (!file) return;

                    const path = folder.trim() === '' ? file.name : `${folder}/${file.name}`;
                    const uploadRef = ref(storage, path);

                    uploadBytes(uploadRef, file).then((snapshot) => {
                        console.log('업로드 성공', snapshot);
                        alert('업로드 성공!');
                    }).catch((error) => {
                        console.error('업로드 실패', error);
                    });
                }}
            />
        </>
    );
};

export default FileUpload;