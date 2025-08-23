import { useState, } from 'react';
import Clicker from './clicker.tsx'

export default function App() {
    const [clickerActive, setClickerActive] = useState(true);

    function onOffClick() {
        setClickerActive(! clickerActive);
    }

    return (
        <>
            <button onClick={ onOffClick }>on/off</button>
            <Clicker onOff={clickerActive}/>
        </>
    )
}
