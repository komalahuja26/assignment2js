import { useState } from 'react';

export default function ItemManager() {
    const [items, setItems] = useState([]);

    const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
    const removeItem = () => setItems(items.slice(0, -1));

    return (
        <div className="container mt-4">
            <h2>Item Manager</h2>
            <button className="btn btn-primary me-2" onClick={addItem}>Add Item</button>
            <button className="btn btn-danger" onClick={removeItem}>Remove Item</button>
            <ul className="mt-3">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}
