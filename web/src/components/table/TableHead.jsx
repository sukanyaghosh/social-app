export default function TableHead({ head }) {
  return (
    <thead>
      <tr>
        {head.map((headItem, headIndex) => (
          <th key={headIndex}>{headItem}</th>
        ))}
      </tr>
    </thead>
  );
}
