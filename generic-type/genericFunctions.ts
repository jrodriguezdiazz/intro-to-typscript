function genericFunction<T>(data: T): T {
    return data;
}

const Logger = (result: any): void => {
    console.log({ type: typeof result, result });

}
const result1 = genericFunction(1);
Logger(result1);
const result2 = genericFunction('Joe Doe');
Logger(result2);

const result3 = genericFunction(false);
Logger(result3);