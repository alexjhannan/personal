import React from "react"
import { connect } from "react-redux"
import { addAllNotes, removeAllNotes } from "@state/guitar/actions"
import styled from "styled-components"

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

export default connect(null, { addAllNotes, removeAllNotes })(Controls)