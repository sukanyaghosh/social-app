import classNames from "classnames";
export default function Input({
  type = "text",
  size,
  options,
  label,
  id,
  nameRadio,
  defaultOption,
  ...rest
}) {
  let input = (
    <input
      type={type}
      className={classNames("form-control", {
        [`form-control-${size}`]: size,
      })}
      {...rest}
    />
  );
  switch (type) {
    case "textarea":
      input = <textarea className="form-control" rows="3" {...rest} />;
      break;
    case "color":
      input = (
        <input
          type={type}
          className="form-control form-control-color"
          {...rest}
        />
      );
      break;
    case "select":
      input = (
        <select
          className={classNames("form-select", {
            [`form-select-${size}`]: size,
          })}
          {...rest}
        >
          <option selected>{defaultOption}</option>
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      );
      break;
    case "checkbox":
      input = (
        <div className="form-check">
          <input className="form-check-input" type={type} id={id} />
          <label className="form-check-label" for={id}>
            {label}
          </label>
        </div>
      );
      break;
    case "radio":
      input = (
        <div className="form-check">
          <input
            className="form-check-input"
            type={type}
            id={id}
            name={nameRadio}
          />
          <label className="form-check-label" for={id}>
            {label}
          </label>
        </div>
      );
  }
  return input;
}
