import phoneNumbers from '../phoneNumber';

test.each([
  ['tel +7', '+7 960 000 00 00', '+79600000000'],
  ['tel 8', '8 (927) 000-00-00', '+79270000000'],
  ['tel +86', '+86 000 000 0000', '+860000000000'],
])('testing phoneNumbers function with %s status and %i amount', (_, amount, expected) => {
  expect(phoneNumbers(amount)).toBe(expected);
});
