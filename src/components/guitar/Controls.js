import React from 'react'
import { func } from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Button = styled.button`
  margin-right: 2rem;
`

const Controls = ({ addAllNotes, removeAllNotes }) => (
  <Container>
    <Button onClick={addAllNotes}>Add All Notes</Button>
    <Button onClick={removeAllNotes}>Remove All Notes</Button>
  </Container>
)

Controls.propTypes = {
  addAllNotes: func.isRequired,
  removeAllNotes: func.isRequired,
}

export default Controls
