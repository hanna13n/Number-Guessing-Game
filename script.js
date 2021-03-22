var number = Math.round(Math.random() * 100)
console.log(number)

function randomguess() {
  var guess = (document.getElementById("userinput")).value
  if (number > guess)
    alert("Your guess is too low!")
  else if (number < guess)
    alert("Your guess is too high!")
  else if (number = guess)
    alert("Hurray! you guessed right.")
}