import {Routes, Route} from 'react-router-dom';

import TopNavi from './components/TopNavi';
import LifeCycle from './components/Lifecycle';

import LocalJsonFetcher from 'components/LocalJsonFetcher';
import ExternalJsonFetcher from 'components/ExternalJsonFetcher';

function App() {
    return (<>
    <TopNavi></TopNavi>
    <Routes>
        <Route path="/" element={<LifeCycle />}></Route>
        <Route path="/local" element={<LocalJsonFetcher />}></Route>
        <Route path="/external" element={<ExternalJsonFetcher />}></Route>
    </Routes>
    </>);
}

export default App;

