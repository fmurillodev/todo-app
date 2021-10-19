const Input = ({ placeholder, value, className, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name="text"
      className={className}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default Input;
