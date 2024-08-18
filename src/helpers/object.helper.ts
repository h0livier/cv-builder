type AnyObject = { [key: string]: any };

function changePropertyValue<T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return {
        ...obj,
        [key]: value
    };
}