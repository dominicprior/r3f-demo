import { useState, useEffect, } from 'react';

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved !== null ? JSON.parse(saved) : 0; // fallback default
  });
    console.log('hi from App');

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
            <button onClick={ buttonClick }>click me</button>
        </div>
    );
}
