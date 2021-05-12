var restaurant = function (mainDish) {
    var ingredients = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ingredients[_i - 1] = arguments[_i];
    }
    console.log("The main dish is " + mainDish + " and the ingredients are: " + ingredients);
};
restaurant('Pizza', ' Sausage', ' Pepperoni', ' BBQ sauce', ' etc...');
