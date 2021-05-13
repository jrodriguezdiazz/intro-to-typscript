const fullName: string = 'Joe Doe';
const age: number = 20;
let nothing: any;
const password: any = '123456';


function getAllMethods(type: string, toCheck: any):void {
  try {
    const functions = Object.getOwnPropertyNames(Object.getPrototypeOf(toCheck));
    console.log({type, methods: functions})
  } catch (error) {
    console.error({type, error: `${error}`})
  }
}

getAllMethods('String', fullName);
getAllMethods('Number', age);
getAllMethods('Any? or String?', password);
getAllMethods('Any', nothing);