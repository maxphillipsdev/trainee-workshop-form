import { useState } from "react";
import isOdd from "is-odd";

function IsOdd(props) {
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <p>{isOdd(number) ? "Odd" : "Even"}</p>
    </div>
  );
}

export { IsOdd };
