const betterTypeOf = (value) => {
    return Array.isArray(value) ? 'array' : typeof value;
};

console.log(betterTypeOf(1));
console.log(betterTypeOf("hello"));
console.log(betterTypeOf(true));
console.log(betterTypeOf(""));
console.log(betterTypeOf([1, 2, 3]));
console.log(betterTypeOf(["a", "b", "c"])); 

const person = {
    fullName: "Sandy Smith",
    age: 28
};
console.log(betterTypeOf(person));
