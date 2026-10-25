// Solution 1
/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const convertToString = (val) => {
    let result = '';
    if(!val) return;
    if(typeof val === "string" || typeof val === "number") result += val + " ";
    else {
      for(const [key, val] of Object.entries(val)) {
        if(val) result += key + " ";
      }
    }
    return result;
  }
  let result = '';
  const flatResult = (val) => {
    if(!val) return;
    if(!Array.isArray(val)) convertToString(val);
    else {
      for(let i=0; i<val.length; i++) {
        if(val[i]) {
          if(!Array.isArray(val[i])) result += convertToString(val[i]);
          else flatResult(val[i]);
        }
        
      }
    }
  }
  flatResult(args);
  return result.trim();
}


// Solution 2: Optimized
/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let result = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === 'string' || argType === 'number') {
      result += (result && ' ') + arg;
    } else if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg); // Recursive call, no helper needed
        if (inner) {
          result += (result && ' ') + inner;
        }
      }
    } else if (argType === 'object') {
      // Fastest way to iterate object keys without allocating arrays
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          result += (result && ' ') + key;
        }
      }
    }
  }

  return result;
}
