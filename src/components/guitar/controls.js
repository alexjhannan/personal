import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import GooeyRadialButton from '~components/gooey-radial-button'
import { NOTE_NAMES } from './utils'

const ControlGroup = styled.div`
  display: grid;
  grid-template: 1fr / repeat(2, 1fr);
  grid-gap: 10px;
  margin: 40px;
`

const Button = styled.button`
  border: 1px solid var(--color-iGrey0);
  background: var(--color-iGrey0);
  color: var(--color-primary);
  border-radius: 2px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.25s ease-out;
  font-weight: bold;
  max-width: 180px;
  margin: 0 auto;
  &:hover {
    background: var(--color-primary);
    color: var(--color-iGrey0);
  }
`

const Controls = ({
  addAllNotes,
  removeAllNotes,
  triggerScaleCurry,
}) => (
  <>
    <ControlGroup>
      <GooeyRadialButton
        centerLabel="Major"
        buttonDuples={
          NOTE_NAMES.map(noteName => ({
            label: noteName,
            onClick: triggerScaleCurry({ key: noteName, scale: 'major' }),
          }))
        } />
      <GooeyRadialButton
        centerLabel="Minor"
        buttonDuples={
          NOTE_NAMES.map(noteName => ({
            label: noteName,
            onClick: triggerScaleCurry({ key: noteName, scale: 'minor' }),
          }))
        } />
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
  triggerScaleCurry: func.isRequired,
}

export default Controls
