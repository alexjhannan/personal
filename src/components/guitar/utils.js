import { memoize } from '~utilities'

export const SCALE_LENGTH = 2550
export const FB_WIDTH = 1780
export const FB_HEIGHT = 200

export const NOTES = [
  'A',
  'A#',
  'B',
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

export const SCALES = {
  Major: [0, 2, 4, 5, 7, 9, 11],
  Minor: [0, 2, 3, 5, 7, 9, 11],
  'Major Pentatonic': [0, 2, 4, 7, 9],
  'Minor Pentatonic': [0, 3, 5, 7, 10],
  Arabian: [0, 2, 3, 5, 6, 8, 9, 11],
  Persian: [0, 1, 4, 5, 6, 8, 11],
  Byzantine: [0, 1, 4, 5, 7, 8, 11],
  Egyptian: [0, 2, 5, 7, 10],
  Oriental: [0, 1, 4, 5, 6, 9, 10],
  Japanese: [0, 2, 5, 7, 8],
  Hirajoshi: [0, 2, 3, 7, 8],
  'Hungarian Gypsy': [0, 2, 3, 6, 7, 8, 11],
  Romanian: [0, 2, 3, 6, 7, 9, 10],
  Alhijaz: [0, 1, 4, 5, 7, 8, 10],
  'Raga Asavari, ascending': [0, 1, 5, 7, 8],
  'Raga Asavari, descending': [0, 1, 3, 5, 7, 8, 10],
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
  const rootIndex = NOTES.indexOf(rootNote)
  return NOTES[(rootIndex + semitones) % 12]
}

function calculateNoteName(stringNumber, fretNumber) {
  const stringRoot = TUNING_STD[stringNumber]
  return semitoneUp(stringRoot, fretNumber)
}

function slowCalculateScaleNotes(scaleRoot, scaleType) {
  return SCALES[scaleType].map(interval => semitoneUp(scaleRoot, interval))
}

export function createNoteMap() {
  // returns a 2d noteMap -- noteMap[0][2] stores the note on the second fret of the first string
  const noteMap = []
  let string = 0
  while (string < 6) {
    const stringArray = []
    let fret = 0
    while (fret < 21) {
      stringArray.push({
        string,
        fret,
        name: calculateNoteName(string, fret),
      })
      fret += 1
    }
    noteMap.push(stringArray)
    string += 1
  }
  return noteMap
}

function slowGenerateColorArray(length, saturation = '60%', lightness = '37%') {
  return ' '.repeat(length).split('').map((_, i) => `hsl(${(Math.round((i / length) * 360))},${saturation},${lightness})`)
}

export const fretPosition = memoize(slowFretPosition)
export const stringPosition = memoize(slowStringPosition)
export const calculateScaleNotes = memoize(slowCalculateScaleNotes)
export const generateColorArray = memoize(slowGenerateColorArray)
