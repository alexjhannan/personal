/* eslint-disable import/prefer-default-export */
export function memoize(fn) {
  const cache = {}
  // eslint-disable-next-line func-names
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}
