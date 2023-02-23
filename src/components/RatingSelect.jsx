import { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(1);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <li key={i + 1}>
            <input
              value={i + 1}
              type="radio"
              name="rating"
              id={`num-${i + 1}`}
              onChange={handleChange}
              checked={selected === i + 1}
            />
            <label htmlFor={`num-${i + 1}`}>{i + 1}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
