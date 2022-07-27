// DONE
function findShort(s) {
  let split = s.split(" ");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    arr.push(split[i].length);
  }
  return arr.sort((a, b) => a - b)[0];
}

console.log(
  findShort(
    "Monero ProofOfStake DarkCoin BTC 21inc Dogecoin Mine Ethereum Lisk LiteCoin BTC Dash Mine Lisk Bitcoin Waves DarkCoin"
  )
); // 3
// assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
// assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
// assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
