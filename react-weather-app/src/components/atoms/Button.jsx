const Button = ({
  type = "submit",
  onClick,
  text = "Submit",
  value,
  className,
  id,
  name,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      value={value}
      id={id}
      className={className}
      name={name}
    >
      {text}
    </button>
  );
};

export default Button;
