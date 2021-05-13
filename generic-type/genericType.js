var fullName = 'Joe Doe';
var age = 20;
var nothing;
var password = '123456';
function getAllMethods(type, toCheck) {
    try {
        var functions = Object.getOwnPropertyNames(Object.getPrototypeOf(toCheck));
        console.log({ type: type, methods: functions });
    }
    catch (error) {
        console.error({ type: type, error: "" + error });
    }
}
getAllMethods('String', fullName);
getAllMethods('Number', age);
getAllMethods('Any? or String?', password);
getAllMethods('Any', nothing);
