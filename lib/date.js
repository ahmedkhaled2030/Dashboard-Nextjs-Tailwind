export function prettyDate(dateStr) {
  return  (new Date(dateStr)).toLocaleString('en-GB', { hour12: true });
}