var person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

for (var propName in person) {
  console.log(propName, " :", person[propName]);
}