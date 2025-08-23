import { useState, useEffect, } from 'react';

export default function Clicker({onOff}: {onOff: boolean}) {
    const [count, setCount] = useState(
            +(localStorage.getItem("count") ?? '0')
    );
    console.log('hi from App');

    useEffect(() => {
        localStorage.setItem('count', '' + count)
        console.log('setting to ' + count);
    },
    [ count ]);

    function buttonClick() {
        setCount(count + 1);
    }

    if (!onOff) {
        return null;
    }

    return (
        <div>
            <div>count: { count }</div>
            <button onClick={ buttonClick }>click me</button>
        </div>
    );
}
