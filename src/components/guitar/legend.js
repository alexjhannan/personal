import React, { useContext } from 'react'
import styled from 'styled-components'
import { GuitarContext } from './state'
import BaseSVG from '~components/base-svg'
import NoteBlip from './note-blip'

const Container = styled.div`
  background: black;
  padding: 0 var(--layout-gutter-width);
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Heading = styled.h4`
  margin: 0 0 12px;
`

const NoteContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
    margin: 0 8px 0 0;
  }
`

const NoteSVG = styled(BaseSVG)`
  width: 20px;
  height: 20px;
`

const NoteLabel = styled.span`
  font-size: 12px;
  font-family: var(--serif-font-stack);
`

const Legend = () => {
  const {
    scaleType, scaleKey, scaleNotes, scaleColors,
  } = useContext(GuitarContext)

  return (
    <Container>
      { scaleNotes.length > 0 && (
        <>
          <Heading>{`${scaleType}, key of ${scaleKey}`}</Heading>
          <div>
            {scaleNotes.map((note, i) => (
              <NoteContainer key={note}>
                <NoteSVG title={note} viewBox="-20 -20 40 40" width="20" height="20" id={`note-${i}`}>
                  <NoteBlip note={{ name: note }} fill={scaleColors[scaleNotes.indexOf(note)]} />
                </NoteSVG>
                <NoteLabel>{i + 1}</NoteLabel>
              </NoteContainer>
            ))}
          </div>
        </>
      )}
    </Container>
  )
}

export default Legend
