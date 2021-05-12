var optionalValues = function (name, lastName, age) {
    var message = "My name is " + name + " " + lastName;
    if (age)
        message += " and my age is " + age;
    console.log(message);
};
var defaultValues = function (name, lastName, age) {
    if (age === void 0) { age = 18; }
    var message = "My name is " + name + " " + lastName + " and my age is " + age;
    console.log(message);
};
optionalValues('Joe', 'Doe', 0);
optionalValues('Joe', 'Doe', 17);
defaultValues('Joe', 'Doe');
