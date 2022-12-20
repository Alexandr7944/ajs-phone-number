export default function phoneNumbers(num) {
  let tel = num.match(/\+?[0-9]+/g).join('');
  if (tel.length === 11 && /^8/.test(tel)) {
    tel = tel.replace(/^8/, '+7');
  }
  return tel;
}
