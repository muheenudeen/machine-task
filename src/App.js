import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [records, setRecords] = useState([])

  const addrecord = async () => {

    try {
      // const random = Math.floor(Math.random() * 10) + 1
      const response = await axios.get(` https://jsonplaceholder.typicode.com/users`)
      const newRecord = response.data

      setRecords((prevRecords) => [...prevRecords, newRecord])
    } catch (error) {
      console.log("error data fetching", error);


    }
  }
  const deleteReccords = (index) => {

    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index))
  }

  return (
    <>

      <div className='App'>
        <button className='addButton' onClick={() => addrecord}>add Records</button>

        <table className='recordsTable'>
          <thead>
            <tr >
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((records, index) => (
              <tr key={index}>
                <td>{records.name}</td>

                <td>
                  <button onClick={() => deleteReccords(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </>
  );
}

export default App;
