import React, { useState } from "react";
import { InputViewer } from "./Resource/Style/StInput";

export const useInput = (prefill) => {
  const [value, setValue] = useState("");
  const placeholder = prefill;

  const onChange = (e) => setValue(e.target.value);

  return { placeholder, value, onChange }; // 객체로 묶어서 리턴
};

// 중괄호가 없으면 순서대로 받기때문에 중괄호를 써서 매칭을 해준다.
export const Input = ({ onChange, placeholder, type, value }) => (
  <InputViewer
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
  />
);
