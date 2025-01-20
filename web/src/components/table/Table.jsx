import TableBody from "./TableBody";
import TableHead from "./TableHead";
import classNames from "classnames";

const Table = ({ className, data, ...rest }) => {
  const head = Object.keys(data[0]);
  return (
    <table className={classNames("table", { className })} {...rest}>
      <TableHead head={head} />
      <TableBody head={head} data={data} />
    </table>
  );
};
export default Table;
