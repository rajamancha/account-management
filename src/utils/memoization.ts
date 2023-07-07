type Func<T, R> = (arg: T) => R;

function memoize<T, R>(func: Func<T, R>): Func<T, R> {
  const cache = new Map<T, R>();

  return (arg: T): R => {
    if (cache.has(arg)) {
      return cache.get(arg)!;
    }

    const result = func(arg);
    cache.set(arg, result);
    return result;
  };
}

const expensiveBusinessLogic = (n: number): number => {
  console.log("Calculating...", n);
  for (let index = 0; index < 9999999999; index++) {}
  return n * 2;
};

export const memoizedCalcFunction = memoize(expensiveBusinessLogic);

// console.log(memoizedCalcFunction(5));
// console.log(memoizedCalcFunction(5));
// console.log(memoizedCalcFunction(10));
// console.log(memoizedCalcFunction(10));
