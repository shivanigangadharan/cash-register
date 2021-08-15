import React, { useState } from 'react';
import './App.css';

function App() {
  const [amt, setAmt] = useState();
  const [cash, setCash] = useState();
  const [showCash, setShowCash] = useState(true);
  const [showTable, setShowTable] = useState(true);
  function handleNextClick(e) {
    e.preventDefault();
    if (amt === undefined) {
      console.log('amt undefined');
      setShowCash(true)
    }
    else {
      setShowCash(false);
    }
  }
  function handleCheckClick(e) {
    e.preventDefault();
    if (cash === undefined) {
      setShowTable(true)
    }
    else {
      setShowTable(false);
    }
  }
  function handleAmtChange(e) {
    setAmt(e);
  }
  function handleCashChange(e) {
    setCash(e);
  }
  return (
    <div className="container">
      <h1> Cash register manager </h1>
      <p> Enter the amount and cash given by the customer and know minimum number of notes to return </p>
      <form>
        <label> Bill amount </label>
        <input type="number" onChange={(e) => handleAmtChange(e.target.value)} required />
        <button hidden={!showCash} onClick={(e) => handleNextClick(e)}> Next </button>
        <div hidden={showCash} >
          <label> Cash given </label>
          <input type="number" onChange={(e) => handleCashChange(e.target.value)} required />
          <button onClick={(e) => handleCheckClick(e)}> Check </button>
          <div hidden={showTable} >
            <h1> Table </h1>
          </div>
        </div>
        <h3> Return change </h3>
      </form>
    </div>
  );
}
export default App;
