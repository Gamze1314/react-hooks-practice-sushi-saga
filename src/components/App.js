import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [plates, setPlates] = useState([]);
  const [balance, setBalance] = useState(100);

  const updateBalance = plates.map((plate) => {
    if (balance > plate.price)
      return setBalance((balance) => balance - plate.price);
  });


  return (
    <div className="app">
      <SushiContainer plates={plates} setPlates={setPlates} />
      <Table plates={plates} balance={balance} />
    </div>
  );
}

export default App;
