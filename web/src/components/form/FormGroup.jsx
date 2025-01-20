export default function FormGroup({ children, ...rest }) {
  return (
    <div className="mb-3" {...rest}>
      {children}
    </div>
  );
}
