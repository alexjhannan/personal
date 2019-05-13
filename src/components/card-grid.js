import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(300px, 1fr);
  grid-gap: 24px;
`

export const Card = styled.div`
  background: var(--color-pGrey4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  padding: 24px;
  border-radius: 4px;
  @media (min-width: 601px) {
    &:nth-child(even) {
      direction: rtl;
      > * {
        direction: ltr;
        text-align: right;
      }
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 8px;
`
