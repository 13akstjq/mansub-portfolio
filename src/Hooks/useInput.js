import React, { useState } from "react";

const useInput = initialValue => {
  // initialValue는 객체로 받으면 안됨.
  const [value, setValue] = useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  };
  return { value, onChange, setValue };
};

export default useInput;
