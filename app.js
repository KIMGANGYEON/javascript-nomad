const age = parseInt(prompt("how old are you?"));

console.log(isNaN(age));

if (isNaN(age || age < 0)) {
  console.log("Please wirte a number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can eate");
} else {
  console.log("you can drink");
}
