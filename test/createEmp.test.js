const createEmployee = require('../lib/teamMemberConstructor').createEmployee;

let inputs = [
  { name: 'jan', email: 'janjan', officeNumber: '1', title: 'Manager', id: 1},
  { name: 'sdffg', title: 'Engineer', email: 'fefe', github: 'ddff' },
  { name: 'er', title: 'Intern', email: 'gegrg', school: 'gegrg' }
]

test('Should return array values therefore truthy', () => {
  expect(createEmployee(inputs)).toBeTruthy();
});



