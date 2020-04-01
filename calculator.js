const exampleAdditionInput = {
  num1: "a",
  num2: 3,
  operation: "/"
}

//create a function that validate the input option 
const is_valid = function(input){
  if (typeof input.num1 !== "number" ||typeof input.num2 !== "number"){
    throw "You have entered an invalid input, num1 and num2 must be a number"; 
  } 
}

//create a calculate function
const calculator = function(input){
  is_valid(input);
  switch(input.operation){
    case 'add':
    case '+':
      console.log(input.num1 + input.num2);
      break;
    case "subtract":
    case "-":
      console.log(input.num1 - input.num2);
      break;
    case "multiple":
    case "*":
      console.log(input.num1 * input.num2);
      break;
    case "divide":
    case "/":
      if (input.num2 === 0 && typeof input.num1 == "number"){
        console.log("you can't divide a number by 0");  
      } else{
        console.log(input.num1 / input.num2);
      }
      break;
    default:
      console.log ("sorry I don't understand your request. please try again")
  }
}

try {
  calculator(exampleAdditionInput);
}

catch(calculator_exception){
  console.log(calculator_exception);
}
