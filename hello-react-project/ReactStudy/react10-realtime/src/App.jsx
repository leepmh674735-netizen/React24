import { Routes, Route } from 'react-router-dom';
import RealtimeCRUD from './realtimes/RealtimeCRUD';
import Listener from './realtimes/Listener';
import ChatStart from './realtimes/ChatStart';
import ChatMessage from './realtimes/ChatMessage';

function App() {
    return (<>
        <Routes>
            <Route path="/" element={<ChatStart />} />
            <Route path="/crud" element={<RealtimeCRUD />} />
            <Route path="/listen" element={<Listener />} />
            <Route path="/chat" element={<ChatStart />} />
            <Route path="/chat/talk" element={<ChatMessage />} />
        </Routes>
    </>);
}

export default App