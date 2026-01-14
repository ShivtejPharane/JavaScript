//const declaration
// const email = "abc@gmail.com"
// email = "cba@fmail.com"
// console.log(email)

//scope Difference
let a=10
var b=20
{
    let a=200
    var b = 300
    console.log(a,b)
}
console.log(a,b)
//var is referd for the block or change in the block and if changed it will change for the 
//entire code so donot use the var use let variable

//variable declarcation 
let accountid = 10; //number
let declaration;   //only declarcation
let boolean = true;  //Boolean datatype
let null1 = null  //declaration of null value
let email = "abc@gmail.com"; //string declaration 
console.log(accountid,declaration,boolean,null1,email)
console.log(typeof(accountid),typeof(declaration),typeof(boolean),typeof(null1),typeof(email))
// the type null is object