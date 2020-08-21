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
// ------------------------------------------------------------
// Tests 
// User can input a number and see it returned:
// function returner(userNumber) {
//   return userNumber;
// }

// A range up to that number can be returned:
// function returner(userNumber) {
//   let outputArray = [];
//   for (let index = 0; index < userNumber + 1; index += 1) {
//     outputArray.push(index);
//   } 
//   return outputArray;
// }

// Elements in the array range containing certain values can be replaced with a string:
// function replacer(arrayRange) {
//   let newArray = [];
//   arrayRange.forEach(function(element) {
//     element = element.toString();
//     if (element.includes("3")) {
//       element = "Won't you be my neighbor?"
//     }
//     newArray.push(element);
//   });
//   return newArray;
// }
// -------------------------------------------------------------

// $(document).ready(function() {
//   $("#number").submit(function(event) {
//     event.preventDefault();

//     const userNumber = parseInt($("#inputNum").val());

//     let returnNumber = factorial(userNumber);

//     $("#returnNumber").text(returnNumber);
//     $("#returnNumber").show();
//   })
// });

function ranger(userNumber) {
  let outputArray = [];
  for (let index = 0; index < userNumber + 1; index += 1) {
    outputArray.push(index);
  } 
  return outputArray;
}

function replacer(arrayRange) {
  let newArray = [];
  arrayRange.forEach(function(element) {
    element = element.toString();
    if (element.includes("3")) {
      element = "Won't you be my neighbor?";
    } else if (element.includes("2")) {
      element = "Boop!";
    } else if (element.includes("1")) {
      element = "Beep!";
    }
    newArray.push(element);
  });
  return newArray;
}

  $(document).ready(function() {
    $("#number").submit(function(event) {
      event.preventDefault();
  
      const userNumber = parseInt($("#inputNum").val());
  
      // let returnNumber = returner(userNumber);
      let returnNumber = replacer(ranger(userNumber));

  
      $("#returnNumber").text(returnNumber);
      $("#returnNumber").show();
    })
});