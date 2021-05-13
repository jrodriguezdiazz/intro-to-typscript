function genericFunction(data) {
    return data;
}
var Logger = function (result) {
    console.log({ type: typeof result, result: result });
};
var result1 = genericFunction(1);
Logger(result1);
var result2 = genericFunction('Joe Doe');
Logger(result2);
var result3 = genericFunction(false);
Logger(result3);
