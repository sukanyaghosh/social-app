import classNames from "classnames";

export default function Col({ className, xs, sm, md, lg, xl, xxl, children }) {
  return (
    <div
      className={classNames(className, {
        [`col-xs-${xs}`]: xs,
        [`col-sm-${sm}`]: sm,
        [`col-md-${md}`]: md,
        [`col-lg-${lg}`]: lg,
        [`col-xl-${xl}`]: xl,
        [`col-xxl-${xxl}`]: xxl,
      })}
    >
      {children}
    </div>
  );
}
