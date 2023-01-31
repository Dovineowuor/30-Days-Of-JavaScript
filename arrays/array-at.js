const array1 = [5, 12, 8, 1, 44];

let index = 2;

console.log(`The index of ${index} the item has an item ${array1.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 1"