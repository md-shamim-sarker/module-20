{
  function factorialFunction(x) {
    let factorial = 1;

    for (let i = 1; i <= x; i++) {
      factorial *= i;
      //   console.log(i, factorial);
    }
    return factorial;
  }

  let result = factorialFunction(5);
  //   console.log(result);
}

{
  function factorialFunction(x) {
    let factorial = 1;
    let i = 1;
    while (i <= x) {
      factorial *= i;
      //   console.log(i, factorial);
      i++;
    }
    return factorial;
  }
  let result = factorialFunction(5);
  //   console.log(result);
}

{
  function factorialFunction(x) {
    let factorial = 1;
    for (let i = x; i >= 1; i--) {
      factorial *= i;
      console.log(i, factorial);
    }
  }
  //   factorialFunction(5);
}

{
  function factorialFunction(x) {
    let factorial = 1;
    let i = x;
    while (i >= 1) {
      factorial *= i;
      console.log(i, factorial);
      i--;
    }
  }
  factorialFunction(5);
}
