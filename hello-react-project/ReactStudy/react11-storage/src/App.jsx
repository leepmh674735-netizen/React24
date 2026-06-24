import { Routes, Route } from "react-router-dom";
import TopNavi from "./components/TopNavi";
import FileUpload from "./storages/FileUpload";
import FileLists from "./storages/FileLists";

function App() {
    return (<>
        <TopNavi></TopNavi>
        <Routes>
            <Route path='/' element={<FileUpload />} />
            <Route path='/upload' element={<FileUpload />} />
            <Route path='/fileLists' element={<FileLists />} />
            <Route path='/files/*' element={<FileLists />} />
        </Routes>
    </>)
}

export default App;
