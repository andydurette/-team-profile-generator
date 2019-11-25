const generateTeamHtml = require('../lib/generateTeamHtml').generateTeamHtml;

let inputs = [
  { name: 'jan', email: 'janjan', officeNumber: '1', title: 'Manager', id: 1},
  { name: 'sdffg', title: 'Engineer', email: 'fefe', github: 'ddff' },
  { name: 'er', title: 'Intern', email: 'gegrg', school: 'gegrg' }
]

//Data is saved as a variables and therfore private and untestable
test('Should be undefined as it does not return a value but creates the html', () => {
  expect(generateTeamHtml(inputs)).toBeUndefined();
});






