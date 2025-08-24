import { useState, useEffect, useRef, } from 'react';

export default function Clicker({onOff}: {onOff: boolean}) {
    const [count, setCount] = useState(
            +(localStorage.getItem("count") ?? '0')
    );

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        buttonRef!.current!.style.color = 'green';

        return () => {
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
                    {
                        Array.from({length: 1}, (_, i) =>
                                <button
                                    onClick={ buttonClick }
                                    key={ i }
                                    ref={ buttonRef }
                                >
                                    {'click me ' + i}
                                </button>
                        )
                    }
                </>
            }
        </div>
    );
}
