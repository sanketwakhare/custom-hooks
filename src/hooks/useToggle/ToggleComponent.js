import React from "react";
import useToggle from "./useToggle";

export const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="box--component">
      <h3>useToggle</h3>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>True</button>
      <button onClick={() => toggleValue(false)}>False</button>
      <p>value: {value.toString()}</p>
    </div>
  );
};
