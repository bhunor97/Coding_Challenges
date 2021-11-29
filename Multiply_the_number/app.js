function multiply(number) {
  let power = number.toString();
  if (power.includes("-")) {
    let negative = power.slice(1).length;
    let negPowered = Math.pow(5, negative);
    let negAnsw = number * negPowered;
    return negAnsw;
  } else {
    let powLength = power.length;
    let powered = Math.pow(5, powLength);
    let answer = number * powered;
    return answer;
  }
}

console.log(multiply(-2));
