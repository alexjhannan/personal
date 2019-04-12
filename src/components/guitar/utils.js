import { memoize } from "@utilities"

export const SCALE_LENGTH = 2550
export const FB_WIDTH = 1780
export const FB_HEIGHT = 200
export const NOTES = [
  'A',
  'A#',
  'B',
  'B#',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
]
export const TUNING_STD = {
  1: 'E',
  2: 'B',
  3: 'G',
  4: 'D',
  5: 'A',
  6: 'E',
}

const slowFretPosition = (fretIndex) => {
  if (fretIndex === 0) {
    return 5
  } else if (fretIndex === 1) {
    return Math.round(SCALE_LENGTH / 17.817)
  }
   
  const previousFretPosition = fretPosition(fretIndex - 1)
  const newFretOffset = Math.round((SCALE_LENGTH - previousFretPosition) / 17.817)
  return previousFretPosition + newFretOffset
}

// WARNING - strings are based off of INDEX 1
// annnnd strings count "bottom" to "top", because guitar
const slowStringPosition = (stringIndex) => {
  const stringOffset = 17
  const stringSpan = FB_HEIGHT - stringOffset * 2
  return FB_HEIGHT - stringOffset - ((stringIndex - 1) * stringSpan / 5)
}

const semitoneUp = (rootNote, semitones) => {
  const rootIndex = NOTES.indexOf(rootNote)
  return NOTES[(rootIndex + semitones) % 13]
}

const slowCalculateNoteName = (stringNumber, fretNumber) => {
  const stringRoot = TUNING_STD[stringNumber]
  return semitoneUp(stringRoot, fretNumber)
}

export const fretPosition = memoize(slowFretPosition)
export const stringPosition = memoize(slowStringPosition)
export const calculateNoteName = memoize(slowCalculateNoteName)
