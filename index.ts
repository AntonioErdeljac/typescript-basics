let a: number;
let b: boolean;
let c: string;

b = false;
a = 10;
c = 'hello';

let array: number[];

array.push(1);

a = array.pop();

let mixedArray: [number, boolean];

mixedArray = [1, true];

function add(a: number, b: number, c?: number, d: number = 0) {
  return a + b;
}

let sum = add(2, 2, 3);

console.log(sum);