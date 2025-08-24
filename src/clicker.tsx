import { useState, useEffect, } from 'react';

export default function Clicker({onOff}: {onOff: boolean}) {
    const [count, setCount] = useState(
            +(localStorage.getItem("count") ?? '0')
    );
    console.log('hi from clicker');

    useEffect(() => {
        console.log('yes');
        return () => {
            console.log('no');
            localStorage.removeItem('count');
        }
    },
    [ ]);

    useEffect(() => {
        localStorage.setItem('count', '' + count)
        console.log('setting to ' + count);
    },
    [ count ]);

    function buttonClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <div>count: { count }</div>
            { onOff &&
                <>
                    <button onClick={ buttonClick }>click me</button>
                    <button onClick={ buttonClick }>click me</button>
                </> }
        </div>
    );
}
