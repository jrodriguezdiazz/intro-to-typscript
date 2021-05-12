const restaurant = (mainDish: string, ...ingredients: string[]): void => {
    console.log(`The main dish is ${mainDish} and the ingredients are: ${ingredients}`)
}

restaurant('Pizza', ' Sausage', ' Pepperoni', ' BBQ sauce', ' etc...')