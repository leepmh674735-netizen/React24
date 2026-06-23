import { useState } from 'react';
import FrontComp from './components/FrontComp';
import BackComp from './components/BackComp';

function App() {
    const [mode, setMode] = useState('both');

    const handleSetMode = (selectedMode) => {
        setMode(selectedMode);
    };

    let contents = null;

    if (mode === 'both') {
        contents = (
            <>
                <FrontComp onSetMode={(mode) => {
                    handleSetMode(mode);
                }} />
                <BackComp onSetMode={setMode} />
            </>
        );
    } else if (mode === 'front') {
        contents = <FrontComp onSetMode={setMode} />;
    } else if (mode === 'back') {
        contents = <BackComp onSetMode={setMode} />;
    }

    return (
        <div>
            <h2>
                <a href="/" onClick={(event) => {
                    event.preventDefault();
                    setMode('both');
                }}>
                    React-State
                </a>
            </h2>
            <ol>
                {contents}
            </ol>
        </div>
    );
}

export default App;