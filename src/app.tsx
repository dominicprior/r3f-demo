import type { ReactNode } from 'react';
import { useState, } from 'react';
import Clicker from './clicker.tsx';
import People from './people.tsx';

export default function App({ children }: {children: ReactNode}) {
    const [clickerActive, setClickerActive] = useState(true);

    function onOffClick() {
        setClickerActive(! clickerActive);
    }

    return (
        <>
            <People></People>
            { children }
            <button onClick={ onOffClick } style={{color: 'red'}}>
                on/off
            </button>
            { clickerActive && <Clicker onOff={clickerActive}/> }
            { children }
        </>
    )
}
