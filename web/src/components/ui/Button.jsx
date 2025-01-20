export default function Button({
  children,
  color = "primary",
  type = "button",
  size = "md",
  ...rest
}) {
  return (
    <button type={type} className={`btn btn-${color} btn-${size}`} {...rest}>
      {children}
    </button>
  );
}
