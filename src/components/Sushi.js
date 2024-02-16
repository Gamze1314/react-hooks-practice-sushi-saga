import React, { useState } from "react";

function Sushi({ sushi, plates, setPlates }) {
  const { name, price, img_url } = sushi;
  const [isEaten, setIsEaten] = useState(false);

  function handleClick() {
    setIsEaten(!isEaten);
    setPlates([...plates, sushi]);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {isEaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
