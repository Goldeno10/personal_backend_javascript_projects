export default function iterateThroughObject(reportWithIterator) {
  let stringifyedEmployees = '';
  let tracker = 0;
  for (const i of reportWithIterator) {
    stringifyedEmployees += `${(tracker !== 0) ? ' | ' : ''}${i}`;
    tracker += 1;
  }
  return stringifyedEmployees;
}
