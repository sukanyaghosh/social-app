import classNames from "classnames";
const Container = ({ isFull, children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        {
          ["container"]: !isFull,
          ["container-fluid"]: isFull,
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Container;
