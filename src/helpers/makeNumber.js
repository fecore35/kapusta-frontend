export function makeNumber(number) {
  var n = number.toString();
  var separator = ' ';
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + separator);
}
