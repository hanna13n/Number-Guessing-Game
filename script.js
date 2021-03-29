var number = Math.round(Math.random() * 100)
console.log(number)

function randomguess() {
  var guess = (document.getElementById("userinput")).value
  if (number > guess)
    alert("Your guess is wrong.\n Next clue: The number is larger than your guess.")
  else if (number < guess)
    alert("Your guess is wrong.\n Next clue: The number is smaller than your guess.")
  else if (number = guess)
    alert("Hurray! you guessed right.")
}