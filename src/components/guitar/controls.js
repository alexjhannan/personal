import React, { useContext } from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'
import { NOTES, SCALES } from './utils'
import { GuitarContext } from './state'

const Container = styled.div`
  margin: 40px var(--layout-gutter-width);
`

const ControlGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: 40px;
  margin: 40px 0;
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
  &:not(:first-of-type) {
    margin: 0 0 0 16px;
  }
`

const LabelText = styled.span`
  display: block;
  font-weight: bold;
  margin: 0 0 4px;
  letter-spacing: 0.3px;
`

const Select = styled.select`
  width: 100%;
  cursor: pointer;
  font-size: 16px;
`

const Controls = ({
  addAllNotes,
  removeAllNotes,
  setScaleType,
  setScaleKey,
}) => {
  const { scaleKey, scaleType } = useContext(GuitarContext)
  return (
    <Container>
      <ControlGroup>
        <label htmlFor="guitar-key-select">
          <LabelText>Key:</LabelText>
          <Select
            id="guitar-key-select"
            value={scaleKey}
            onChange={e => setScaleKey(e.target.value)}>
            {NOTES.map(note => (
              <option key={note} value={note}>{note}</option>
            ))}
          </Select>
        </label>
        <label htmlFor="guitar-scale-select">
          <LabelText>Scale:</LabelText>
          <Select
            value={scaleType}
            id="guitar-scale-select"
            onChange={e => setScaleType(e.target.value)}>
            {Object.keys(SCALES).map(scale => (
              <option key={scale} value={scale}>{scale}</option>
            ))}
          </Select>
        </label>
      </ControlGroup>
      <Button onClick={addAllNotes}>Show All Notes</Button>
      <Button onClick={removeAllNotes}>Hide All Notes</Button>
    </Container>
  )
}

Controls.propTypes = {
  addAllNotes: func.isRequired,
  removeAllNotes: func.isRequired,
  setScaleType: func.isRequired,
  setScaleKey: func.isRequired,
}

export default Controls
