const Button = ({
  children,
  type = 'button',
  className,
  onClick,
  name,
  ...props
}) => {
  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {name}
      {children}
    </button>
  );
};

export default Button;
