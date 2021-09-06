import React, { useState } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState();
  const [cash, setCash] = useState();
  const [showCash, setShowCash] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [diff, setDiff] = useState();
  const [notes, setNotes] = useState([2000, 500, 100, 20, 10, 5, 1]);
  const [change, setChange] = useState([]);
  function handleNextClick(e) {
    e.preventDefault();
    if (bill > 0) {
      setShowCash(false);
    }
    else {
      console.log('bill undefined');
      setShowCash(true)
    }
  }
  function handleCheckClick(e) {
    e.preventDefault();

    if (cash === undefined) {
      setShowTable(true)
    }
    else {
      setShowTable(false);
      let difference = parseInt(cash - bill);
      var t = [];
      if (cash > bill) {
        notes.map((e, i) => {
          t.push(Math.floor(difference / e));
          // setChange([...change, t]);
          difference = difference % e;
        })
      }
      else {
        setChange([0, 0, 0, 0, 0, 0, 0]);
        alert('Cash given is smaller than bill.')
        return 0;
      }
      setChange(t);
    }
  }

  return (
    <div className="container">
      <h1> Cash register manager </h1>
      <p> Enter the amount and cash given by the customer and know minimum number of notes to return </p>
      <form>
        <label> Bill amount </label><br />
        <input type="number" onChange={(e) => setBill(parseInt(e.target.value))} required />
        <button
          hidden={!showCash}
          onClick={(e) => handleNextClick(e)}> Next </button>
        <div
          hidden={showCash}
        >
          <label> Cash given </label><br />
          <input type="number" onChange={(e) => setCash(parseInt(e.target.value))} required />
          <button onClick={(e) => handleCheckClick(e)}> Check </button>
          <div
            hidden={showTable}
          >
            <h1> Table </h1>
            <table>
              <tbody>
                <tr>
                  <th> No. of notes </th>

                  {
                    change.map((e) => {
                      return (
                        <td> {e} </td>
                      )
                    })
                  }
                </tr>
                <tr>
                  <th> Notes </th>
                  <td>2000 </td>
                  <td>500 </td>
                  <td>100 </td>
                  <td>20 </td>
                  <td>10 </td>
                  <td>5 </td>
                  <td>1 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>





    </div>
  );
}
export default App;
