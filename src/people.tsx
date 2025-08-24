import { useEffect, useState } from "react"

export default function People() {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const [people, setPeople] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
    ]);

    useEffect(() => {
        async function getPeople5() {
            const request = await fetch(URL);
            const result = await request.json();
            setPeople(result);
        }
        getPeople4();
    }, []);

    function getPeople() {
        const request = fetch(URL);
        request.then(response => {
            const parse = response.json();
            parse.then(result => {
                setPeople(result);
            })
        })
    }

    function getPeople2() {
        fetch(URL)
            .then(response => 
                response.json()
                    .then(result => 
                        setPeople(result)
                    )
                )
    }

    function getPeople3() {
        fetch(URL)
            .then(response => response.json())
            .then(result => setPeople(result))
    }

    async function getPeople4() {  // didn't work - couldn't call this function.
        const request = await fetch(URL);
        const result = await request.json();
        setPeople(result);
    }

    return <div>
        <h2>People</h2>
        <ul>
        { people.map(person => 
            <li key={ person.id }>{ person.name }</li>
        ) }
        </ul>
    </div>
}
