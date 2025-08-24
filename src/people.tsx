import { useEffect, useState } from "react"

export default function People() {
    const [people, setPeople] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
    ]);

    useEffect(getPeople3, []);

    function getPeople() {
        const request = fetch('https://jsonplaceholder.typicode.com/users');
        request.then(response => {
            const parse = response.json();
            parse.then(result => {
                setPeople(result);
            })
        })
    }

    function getPeople2() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => 
                response.json()
                    .then(result => 
                        setPeople(result)
                    )
                )
    }

    function getPeople3() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setPeople(result))
    }

    async function callGetPeople4() {  // can't seem to call this function
        await getPeople4();
    }

    async function getPeople4() {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
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
