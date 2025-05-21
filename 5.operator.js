
// Ternary Opearotor

// const value = true ? 'truthy' : 'false'
// console.log(value);



// Guard Operator &&  ----------- 

//   const result = false && console.log('hello');
//   console.log(result)  Output is false bcuz Gurad operator will check whether it is truthy or falsy value if false then it will print false, if truthy it will assign the value to variable 


// example-

let result1 = true && 'false';  
//  it will not check type of operator bcuz there is not ====  output is false

console.log( typeof result1) 
//  output false


// example-

let result = false && 'check';   
// it will not check type of operator bcuz there is not ====  output is false

console.log( typeof result) 
//  output check





// Default Opearator


const currency = 0 || "USD";
console.log(currency)    

// Output is USD

// Beacuse it is or operator of value is flasy value it will  check the right value 

