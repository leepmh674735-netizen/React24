import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import TopNavi from "./TopNavi";
import NotFound from './components/NotFound';
import LayoutIndex from './LayoutIndex';

function App() {
    return (
        <>
            <TopNavi />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/intro' element={<CommonLayout />}>
                <Route index element={<LayoutIndex />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;