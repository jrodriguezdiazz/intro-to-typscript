class Person<T> {
    fullName: string;
    age: T;
    showData: (data: T) => T;
}

const person = new Person();
console.log(person.showData('F'))