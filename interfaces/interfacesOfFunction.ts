interface ICM {
    (name: string, 
    weight: number, 
    height: number):void 
}
const calculateICM: ICM = (name: string, weight: number, height: number):void => {
    const icm = weight / (height ** 2);
    const message = `The ICM of ${name} is ${icm.toFixed(2)}`
    console.log(message);
}

calculateICM('Jon',190,1.80)