import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import Layout from '~components/layout'

const ParentGrid = styled.div`
  padding: 24px;
  background: black;
  height: 75vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-gap: 24px;
  margin: 1rem 0 0;
`

const MainColors = styled.div`
  display: grid;
  grid-template-columns: ${'1fr '.repeat(3)};
  grid-template-rows: 128px;
  grid-gap: 24px;
`

const ColorSwatch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: BioRhyme;
`

const PrimarySwatch = styled(ColorSwatch)`
  background: var(--color-primary);
`

const InverseSwatch = styled(ColorSwatch)`
  background: var(--color-inverse);
`

const HighlightSwatch = styled(ColorSwatch)`
  background: var(--color-highlight);
`

const GrayScales = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`

const GrayScaleGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const GrayScale = ({ baseColor }) => (
  <GrayScaleGrid>
    {' '.repeat(5).split('').map((_, i) => (
      <ColorSwatch
        key={i} // eslint-disable-line
        style={{
          background: `var(--color-${baseColor}${i})`,
          color: i > 1 ? '#eee' : '#222',
        }}>
        {`--color-pGrey${i}`}
      </ColorSwatch>
    ))}
  </GrayScaleGrid>
)

GrayScale.propTypes = {
  baseColor: string.isRequired,
}

const ColorPalette = () => (
  <Layout>
    <ParentGrid>
      <MainColors>
        <PrimarySwatch>--color-primary</PrimarySwatch>
        <HighlightSwatch>--color-highlight</HighlightSwatch>
        <InverseSwatch>--color-inverse</InverseSwatch>
      </MainColors>
      <GrayScales>
        <GrayScale baseColor="pGrey" />
        <GrayScale baseColor="iGrey" />
      </GrayScales>
    </ParentGrid>
  </Layout>
)

export default ColorPalette
