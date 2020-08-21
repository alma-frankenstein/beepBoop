// function factorial(userNumber) {
//   if (userNumber === 0) {
//     return 1;
//   }
//   if (userNumber < 0) {
//     return;
//   }
//   let total = 1;
//   for (let num = userNumber; num > 0; num -= 1) {
//     total *= num;
//   }
//   return total;
// }

// Tests 
// User can input a number and see it returned:
// function returner(userNumber) {
//   return userNumber;
// }

// A range up to that number can be returned:
function returner(userNumber) {
  let outputArray = [];
  for (let index = 0; index < userNumber + 1; index += 1) {
    outputArray.push(index);
  } 
  return outputArray;
}

// $(document).ready(function() {
//   $("#number").submit(function(event) {
//     event.preventDefault();

//     const userNumber = parseInt($("#inputNum").val());

//     let returnNumber = factorial(userNumber);

//     $("#returnNumber").text(returnNumber);
//     $("#returnNumber").show();
//   })
// });

  $(document).ready(function() {
    $("#number").submit(function(event) {
      event.preventDefault();
  
      const userNumber = parseInt($("#inputNum").val());
  
      let returnNumber = returner(userNumber);
  
      $("#returnNumber").text(returnNumber);
      $("#returnNumber").show();
    })
});