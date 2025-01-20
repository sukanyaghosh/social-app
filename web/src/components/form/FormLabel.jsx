export default function FormLabel({ label, ...rest }) {
  return (
    <label className="form-label" {...rest}>
      {label}
    </label>
  );
}
