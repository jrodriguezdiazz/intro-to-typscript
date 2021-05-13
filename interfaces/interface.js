;
function calculateICM(person) {
    var icm = person.weight / (Math.pow(person.height, 2));
    var message = "The ICM of " + person.name + " " + (person.lastName || '') + " is " + icm.toFixed(2);
    console.log(message);
}
var newPerson = {
    name: 'Jon',
    height: 1.80,
    weight: 190
};
calculateICM(newPerson);
