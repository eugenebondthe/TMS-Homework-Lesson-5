import { question } from "readline-sync";

//task 1

const inputNum = question("Input number:\n");
let res = 0;

function getSumm(num: number): void {
  for (let i = 0; i <= num; i++) {
    res += i;
  }
  console.log(`Sum of all numbers before user input is:\n${res}`);
}

getSumm(parseInt(inputNum));

//task 2

const askedCreditValue = question(
  "What amount of money you would like to borrow:\n"
);
const rate = 0.17;
const termYears = 5;

const overpaymentCounter = function (value: number): number {
  let overpayment = Math.round(value * rate * termYears);
  return overpayment;
};

console.log(
  `Your overpayment will be:\n${overpaymentCounter(parseInt(askedCreditValue))}`
);

//task 3

const defaultStr = question("Input a string u want to trim:\n");
const userTrimStart = question("Enter trim starting point:\n");
const userTrimEnd = question("Input trim ending point:\n");

function trimString(str: string, trimFrom: any, trimTo: any): string {
  if (parseInt(trimFrom) >= 0 && parseInt(trimTo) >= 0) {
    return str.substring(parseInt(trimFrom) - 1, parseInt(trimTo) - 1);
  } else {
    let trimStartPoint = str.indexOf(trimFrom);
    let trimEndPoint = str.lastIndexOf(trimTo);
    return str.substring(trimStartPoint, trimEndPoint);
  }
}

console.log(
  `Here is your trimmed string:\n${trimString(
    defaultStr,
    userTrimStart,
    userTrimEnd
  )}`
);

//task 4

const userNum = question("Input your number to sum:\n");

function getSumNumbers(num: number): number {
  let sum = 0;
  let x = String(num);
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}

console.log(getSumNumbers(Number(userNum)));

//task 5

const a = Number(question("Input your first number:\n"));
const b = Number(question("Input your second number:\n"));

function getSum1(a: number, b: number): number {
  let sum = 0;
  if (a === b) {
    return a;
  } else if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  } else {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
    return sum;
  }
}

console.log(`Result:\n${getSum1(a, b)}`);

//task 6

const inputVariantSelector = question("Input true or false:\n");

const variant =
  inputVariantSelector === "true" || inputVariantSelector === "True"
    ? true
    : false;

function fooboo(boolean: boolean, func1: Function, func2: Function): void {
  if (boolean) {
    func1();
  } else {
    func2();
  }
}

function foo() {
  console.log("This is a function FOO");
}

function boo() {
  console.log("This is a function BOO");
}

fooboo(variant, foo, boo);

//task 7

const inputN = Number(question("Input number to count factorial:\n"));

const result = (function (x: number): number {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact *= i;
  }
  return fact;
})(inputN);

console.log(result);

//advanced task 1

const sideA = Number(question("Input size of side A:\n"));
const sideB = Number(question("Input size of side B:\n"));
const sideC = Number(question("Input size of side C:\n"));

const isTriangle = function (a: number, b: number, c: number): boolean {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

console.log(`The answer is: ${isTriangle(sideA, sideB, sideC)}`);

//advanced task 2

const taxRate = 0.2;
const phonePrice = 510;
const phoneAddons = 25;
const balance = 1000;

function sumPrice(phone: number, addon: number, balance: number): number {
  let set = phone + addon;
  let sum = 0;
  while (sum < balance - set) {
    sum += set;
  }
  return sum;
}

function getTaxed(sum: Function, taxRate: number): number {
  const phoneSum = sum(phonePrice, phoneAddons, balance);
  const tax = phoneSum * taxRate;

  return phoneSum + tax;
}

function formatSum(sum: number): string {
  return sum.toFixed(2) + "$";
}

function canBuy(taxed: number, balance: number): boolean {
  if (taxed < balance) {
    console.log(
      `Your balance is ${balance}. You can afford ${formatSum(
        getTaxed(sumPrice, taxRate)
      )} purchase`
    );
    return true;
  } else {
    console.log(
      `Your balance is ${balance}. You can't afford ${formatSum(
        getTaxed(sumPrice, taxRate)
      )} purchase`
    );
    return false;
  }
}

canBuy(getTaxed(sumPrice, taxRate), balance);
