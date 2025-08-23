import { useState, useEffect, } from 'react';

let n = 0;

export default function App() {
    const [count, setCount] = useState(0);

    console.log('hi from App');

    useEffect(() => {
        const savedCount = +(localStorage.getItem('count') ?? 7);
        n++;
        console.log('getting ' + savedCount + ' : ' + n);
        setCount(savedCount);
    },
    [ ]);

    useEffect(() => {
        localStorage.setItem('count', '' + count)
        n++;
        console.log('setting to ' + count + ' : ' + n);
    },
    [ count ]);

    function buttonClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <div>count: { count }</div>
            <button onClick={ buttonClick }>click me</button>
        </div>
    );
}
