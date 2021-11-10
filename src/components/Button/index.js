const Button = ({ className, label }) => {
  return (
    <button data-testid='button' className={className}>
      {label}
    </button>
  );
};

export default Button;
