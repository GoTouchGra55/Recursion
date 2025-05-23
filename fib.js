// Iterative fibonacci

function fibs(num) {
  fibSeries = [];
  for (let i = 0; i <= num; i++) {
    if (i == 0 || i == 1) {
      fibSeries.push(i);
    } else {
      fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
  }
  return fibSeries;
}

// Recursive fibonacci

function fibonacci(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibsrec(num) {
  fibSeries = [];
  for (let i = 0; i <= num; i++) {
    fibSeries.push(fibonacci(i));
  }
  return fibSeries;
}
