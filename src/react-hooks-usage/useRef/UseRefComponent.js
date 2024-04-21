import React, { useRef, useState } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(null);

  const onChange = (e) => {
    e.preventDefault();
    setValue(() => inputRef.current.value);
  };

  return (
    <div className="box--component">
      <h3>useRef</h3>
      <input ref={inputRef} onChange={onChange}></input>
      <div>{value}</div>
    </div>
  );
};

export default UseRefComponent;
