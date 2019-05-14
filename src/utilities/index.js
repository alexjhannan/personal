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

export function map2d(fn, grandparent) {
  return grandparent.map(
    parent => parent.map(child => fn(child)),
  )
}

export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

export function gcd(a, b) {
  return (b ? gcd(b, a % b) : a)
}

export function reduceFraction([numerator, denominator]) {
  const factor = gcd(numerator, denominator)
  return [numerator / factor, denominator / factor]
}
