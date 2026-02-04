// diiference between arrow and simple function  (this key word)
function sayHello() {
  return "Hello World";
}

let message = sayHello();
console.log(`${message} --> this is simple function`);
const sum = (a,b)=> {
    res = a+b
    return res
}
console.log(`${sum(5,5)} --> this is arrow function`);

