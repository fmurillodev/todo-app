import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";

const Form = ({ onSubmit, placeholder, classNameButton, label, edit }) => {
  const [input, setInput] = useState(edit?.value || "");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={placeholder}
        className="todo-input"
        onChange={handleChange}
        value={input}
      />
      <Button className={classNameButton} label={label} />
    </form>
  );
};

export default Form;
