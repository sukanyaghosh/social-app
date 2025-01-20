export default function TableBody({ head, data }) {
  return (
    <tbody>
      {data.map((rowItem, rowIndex) => (
        <tr key={rowIndex}>
          {head.map((colItem, colIndex) => (
            <td key={colIndex}>{rowItem[colItem]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
