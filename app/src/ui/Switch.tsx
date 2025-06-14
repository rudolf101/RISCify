import React, { useId } from "react";

export const Switch = <T,>(props: {
  cases: { text: string; value: T; }[];
  value: T;
  onChange: (v: T) => void;
}) => {
  const id = useId();
  return (
    <div className="switch">
      {props.cases.map((_case, i) => (
        <label
          key={i}
          htmlFor={`${id}-${i}`}
          className={props.value === _case.value ? "selected" : ""}
        >
          <input
            type="radio"
            name={id}
            id={`${id}-${i}`}
            checked={props.value === _case.value}
            onChange={() => {
              props.onChange(_case.value);
            }} />
          {_case.text}
        </label>
      ))}
    </div>
  );
};
