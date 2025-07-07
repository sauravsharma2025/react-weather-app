const InputField = ({
  type = "text",
  placeHolder = "",
  onChange,
  className,
  disabled = false,
  autoFocus = "false",
  ariaLabel = "input field",
  name,
  id,
  value,
}) => {
  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      autoFocus={autoFocus}
      name={name}
      id={id}
      className={`border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      aria-label={ariaLabel}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default InputField;
