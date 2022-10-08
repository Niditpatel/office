const last = (arr) => {
    return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last(['a', 'bigint', 'c']);
const makeArr = (x, y) => {
    return [x, y];
};
const v = makeArr(5, 6);
const v2 = makeArr("a", "b");
const v3 = makeArr("a", 5);
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName, sexyBoy: obj.firstName });
};
const v4 = makeFullName({ firstName: "nidit", lastName: "Visaveliya", age: 15 });
console.table(v4);
