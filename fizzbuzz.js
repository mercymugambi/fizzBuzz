module.exports = function (){
  // write your code here
  let output = [];
  for (let i=1; i<=100; i++){
    if (i%3 ===0 && i%5 ===0){
      output.push("FizzBuzz");

    }
    else if (i%3===0){
      output.push("Fizz");

    } 
    else if (i%5 === 0){
      output.push("Buzz");

    }
    else {
      output.push(i);

    }
  }
  return output;
}
