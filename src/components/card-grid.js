import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: 300px;
  grid-gap: 24px;
`

export const Card = styled.div`
  background: var(--color-pGrey4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;
  padding: 24px;
  border-radius: 4px;
  &:nth-child(even) {
    direction: rtl;
  }
`
