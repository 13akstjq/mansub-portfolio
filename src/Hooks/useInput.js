import React, { useState } from "react";

const useInput = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
