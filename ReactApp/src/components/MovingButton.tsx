import { useState } from "react";

function MovingButton() {
  const getRandomPosition = () => ({
    transition: "top 0.3s, left 0.3s",
    position: "absolute",
    top: Math.floor(Math.random() * 75) + "vh",
    left: Math.floor(Math.random() * 75) + "vw",
  });

  const [style, setStyle] = useState({});

  const handleClick = () => {
    setStyle(getRandomPosition());
  };

  return (
    <button
      onMouseOver={handleClick}
      onClick={handleClick}
      style={{
        ...style,
      }}
    >
      nooo …
    </button>
  );
}

export default MovingButton;
