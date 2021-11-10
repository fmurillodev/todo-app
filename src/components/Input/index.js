import React, { useRef, useEffect } from 'react';

const Input = ({ placeholder, value, className, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <input
      type='text'
      placeholder={placeholder}
      value={value}
      name='text'
      className={className}
      onChange={onChange}
      autoComplete='off'
      ref={inputRef}
    />
  );
};

export default Input;
