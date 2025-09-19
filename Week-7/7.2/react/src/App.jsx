import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [number, setNumber] = useState(0);
  const [table, setTable] = useState([]);

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    setNumber(value);
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push(`${value} x ${i} = ${value * i}`);
    }
    setTable(newTable);
  };

  return (
    <>
      <Input onChange={handleInputChange} />
      <Profile number={number} table={table} />
    </>
  );
}


function Profile({ number, table }) {
  return (
    <div>
      <div>Table of {number}</div>
      <ul>
        {table.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


function Input({ onChange }) {
  return (
    <div>
      <input onChange={onChange} type="number" placeholder="Enter a number" />
    </div>
  );
}

export default App
