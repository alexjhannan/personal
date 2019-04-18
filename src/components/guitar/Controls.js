import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import { NOTE_NAMES } from './utils'

const ControlGroup = styled.div`
  display: grid;
  grid-template: 1fr / ${'1fr '.repeat(5)};
  grid-gap: 10px;
  margin: 40px 0;
`

const Button = styled.button`
  border: 1px solid var(--color-offwhite);
  background: var(--color-offwhite);
  color: var(--color-primary);
  border-radius: 2px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    background: var(--color-primary);
    color: var(--color-offwhite);
  }
`

const Controls = ({
  addAllNotes,
  removeAllNotes,
  triggerMajorScaleCurry,
  triggerMinorScaleCurry,
}) => (
  <>
    <ControlGroup>
      { NOTE_NAMES.map((noteName) => (
        <Button
          key={`${noteName}-scale-button`}
          onClick={triggerMajorScaleCurry(noteName)}
        >
          {`${noteName} Major Scale`}
        </Button>
      ))}
    </ControlGroup>
    <ControlGroup>
      { NOTE_NAMES.map((noteName) => (
        <Button
          key={`${noteName}-scale-button`}
          onClick={triggerMinorScaleCurry(noteName)}
        >
          {`${noteName} Minor Scale`}
        </Button>
      ))}
    </ControlGroup>
    <ControlGroup>
      <Button onClick={addAllNotes}>Add All Notes</Button>
      <Button onClick={removeAllNotes}>Remove All Notes</Button>
      <div />
    </ControlGroup>
  </>

)

Controls.propTypes = {
  addAllNotes: func.isRequired,
  removeAllNotes: func.isRequired,
  triggerMajorScaleCurry: func.isRequired,
  triggerMinorScaleCurry: func.isRequired,
}

export default Controls
