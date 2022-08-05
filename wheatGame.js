function wheatGame(x) {
  let arr = [];
  let amount = 1;
  for (let i = 1; i <= x; i++) {
    amount += amount * amount;
    console.log(amount);
  }
}

wheatGame(2);
