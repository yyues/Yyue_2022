const debounce = (fn: Function, ms = 0) => {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.call(args), ms);
  };
};
const throttle = (fn: Function, wait: number) => {
  let inThrottle: boolean, lastFn: NodeJS.Timeout, lastTime: number;
  return function () {
    const args = arguments;
    if (!inThrottle) {
      fn.call(args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime >= wait) {
          fn.call(args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export { debounce, throttle };
