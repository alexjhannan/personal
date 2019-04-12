import { memoize } from "@utilities"

export const SCALE_LENGTH = 2550
export const FB_WIDTH = 1780
export const FB_HEIGHT = 200

// WARNING!!!! frets and strings are 1-INDEXED! musicians use 1-indexing,
// and it seemed wiser to not have to translate fret and string numbers back and forth.

const slowFretPosition = (fretIndex) => {
  let result
  if (fretIndex === 1) {
    result =  Math.round(SCALE_LENGTH / 17.817)
  } else if (fretIndex === 0) {
    return 30
  } else {
    const previousFretPosition = fretPosition(fretIndex - 1)
    const newFretOffset = Math.round((SCALE_LENGTH - previousFretPosition) / 17.817)
    result = previousFretPosition + newFretOffset
  }
  return result
}

const slowStringPosition = (stringIndex) => {
  // annnnd strings map bottom to top, because guitar
  const stringOffset = 17
  const stringSpan = FB_HEIGHT - stringOffset * 2
  return FB_HEIGHT - stringOffset - ((stringIndex - 1) * stringSpan / 5)
}

export const fretPosition = memoize(slowFretPosition)

export const stringPosition = memoize(slowStringPosition)
