var calculateICM = function (name, weight, height) {
    var icm = weight / (Math.pow(height, 2));
    var message = "The ICM of " + name + " is " + icm.toFixed(2);
    console.log(message);
};
calculateICM('Jon', 190, 1.80);
