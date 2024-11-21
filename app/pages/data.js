import { useEffect, useState } from 'react';

export default function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Mock API call
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <h1>Data Page</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
