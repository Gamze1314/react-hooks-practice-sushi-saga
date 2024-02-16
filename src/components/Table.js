import React from "react";

function Table({ plates, balance }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  // customer budget = $100
  // on every click on Sushi=>  price goes down by sushi costs
  // display remaining price on h1

  return (
    <>
      <h1 className="remaining">You have: ${balance} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
