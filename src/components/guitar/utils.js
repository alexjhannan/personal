import { memoize } from '~utilities'

export const SCALE_LENGTH = 2550
export const FB_WIDTH = 1780
export const FB_HEIGHT = 200
export const NOTE_NAMES = [
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
  0: 'E',
  1: 'B',
  2: 'G',
  3: 'D',
  4: 'A',
  5: 'E',
}

function slowFretPosition(fretIndex) {
  if (fretIndex === 0) {
    return 5
  } if (fretIndex === 1) {
    return Math.round(SCALE_LENGTH / 17.817)
  }

  // LINTER DISABLED - this is a recursive call to a memoized self
  const previousFretPosition = fretPosition(fretIndex - 1) // eslint-disable-line
  const newFretOffset = Math.round((SCALE_LENGTH - previousFretPosition) / 17.817)
  return previousFretPosition + newFretOffset
}

function slowStringPosition(stringIndex) {
  const stringOffset = 17
  const stringSpan = FB_HEIGHT - stringOffset * 2
  return FB_HEIGHT - stringOffset - ((stringIndex) * stringSpan / 5)
}

function semitoneUp(rootNote, semitones) {
  const rootIndex = NOTE_NAMES.indexOf(rootNote)
  return NOTE_NAMES[(rootIndex + semitones) % 13]
}

function calculateNoteName(stringNumber, fretNumber) {
  const stringRoot = TUNING_STD[stringNumber]
  return semitoneUp(stringRoot, fretNumber)
}

export const fretPosition = memoize(slowFretPosition)
export const stringPosition = memoize(slowStringPosition)

export function initializeNoteMap() {
  // returns a 2d noteMap -- noteMap[0][2] stores the note on the second fret of the first string
  const initialNoteMap = []
  let string = 0
  while (string < 6) {
    const stringArray = []
    let fret = 0
    while (fret < 21) {
      stringArray.push({
        string,
        fret,
        theme: 'none',
        name: calculateNoteName(string, fret),
      })
      fret += 1
    }
    initialNoteMap.push(stringArray)
    string += 1
  }
  return initialNoteMap
}
