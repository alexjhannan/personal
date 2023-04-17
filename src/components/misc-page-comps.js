import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const GutterWrapper = styled.div`
  padding: 0 var(--layout-gutter-width);
`

export const Heading = styled.h1`
  margin: 24px;
  text-align: center;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0;
`

export const HeadingImage = styled(GatsbyImage)`
  width: 98px;
  filter: brightness(0) invert(1);
  display: inline-block;
  ${props => `
    &:not(:${props.flipped ? 'last-of-type' : 'first-of-type'}) {
      transform: rotateY(180deg);
    }
  `}
  @media (max-width: 600px) {
    &:first-of-type {
      display: none;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-auto-rows: minmax(150px, 1fr);
  grid-gap: 24px;
  margin: 24px 0;
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
    grid-auto-rows: 0fr;
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 8px;
`


export const CardImageLink = styled(Link)`
  display: block;
`

export const CardImage = styled(Img)`
  border-radius: 4px;
`
