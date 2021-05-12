const optionalValues = (name: string, lastName: string, age?: number): void => {
  let message = `My name is ${name} ${lastName}`
  if (age) message += ` and my age is ${age}`;
  console.log(message);
}


const defaultValues = (name: string, lastName: string, age: number = 18): void => {
  const message = `My name is ${name} ${lastName} and my age is ${age}`;
  console.log(message);
}
optionalValues('Joe', 'Doe', 0);
optionalValues('Joe', 'Doe', 17);
defaultValues('Joe', 'Doe');