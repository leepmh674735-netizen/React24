import { Routes, Route } from 'react-router-dom';
import ChatStart from './components/ChatStart';
import ChatWidow from './components/ChatWidow';

function App(){
    return (<>
        <Routes>
            <Route path='/' element={<ChatStart />} />
            <Route path='/talk' element={<ChatWidow />} />
        </Routes>
    </>);
}

export default App;