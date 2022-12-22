export default function phoneNumbers(num) {
  let phone = num.match(/\+?[0-9]+/g).join('');
  if (phone.length === 11 && /^8/.test(phone)) {
    phone = phone.replace(/^8/, '+7');
  }
  return phone;
}
