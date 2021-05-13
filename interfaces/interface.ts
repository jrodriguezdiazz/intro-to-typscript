interface Person {
    name: string;
    lastName?: string;
    readonly weight: number; //in pounds
    readonly height: number; //in mtrs
};

function calculateICM(person: Person): void {
    const icm = person.weight / (person.height ** 2);
    const message = `The ICM of ${person.name} ${person.lastName || ''} is ${icm.toFixed(2)}`
    console.log(message);
}

const newPerson: Person = {
    name: 'Jon',
    height: 1.80,
    weight: 190
}

calculateICM(newPerson);