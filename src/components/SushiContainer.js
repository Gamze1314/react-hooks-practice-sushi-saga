import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ setOnStack, onStack, plates, setPlates }) {
  const [showSushis, setShowSushis] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((data) => setShowSushis(data));
  }, []);

  const sushiPlates = showSushis
    .slice(currentIndex, currentIndex + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        id={sushi.id}
        sushi={sushi}
        plates={plates}
        setPlates={setPlates}
      />
    ));

  const incrementIndex = () => {
    setCurrentIndex((currentIndex) => currentIndex + 4);
  };

  return (
    <div className="belt">
      {sushiPlates}
      <MoreButton incrementIndex={incrementIndex} />
    </div>
  );
}

export default SushiContainer;
