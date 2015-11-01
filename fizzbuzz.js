var FizzBuzz = {
  divisibleBy: function(n, divisor) {
    return (n % divisor === 0);
  },
  run: function(n) {
    var result = "";
    if (divisibleBy(n, 3)) {
      result += "Fizz";
    }
    if (divisibleBy(n, 5)) {
      result += "Buzz";
    }
    return(result || n);
  }
}
