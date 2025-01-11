import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [records, setRecords] = useState([]);

  const addrecord = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const newRecord = response.data.map(user => ({
        name: user.name,
        email: user.email
      }));

      setRecords((prevRecords) => [...prevRecords, ...newRecord]);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const deleteReccords = (index) => {
    setRecords((prevRecords) => prevRecords.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="App">
        <button className="addButton" onClick={addrecord}>Add Records</button>

        <table className="recordsTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.email}</td>
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
