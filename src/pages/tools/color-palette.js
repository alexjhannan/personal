import React, { useContext } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { ThemeContext } from '~components/layout/themer'
import { SliderPicker } from 'react-color'

const Wrapper = styled.div`
  padding: 0 var(--layout-gutter-width);
`

const ParentGrid = styled.div`
  padding: 24px;
  background: black;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 24px;
  margin: 1rem 0;
`

const ColorSwatch = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`

const PrimaryContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-rows: 64px;
`

const PrimarySwatch = styled(ColorSwatch)`
  background: var(--color-primary);
`

const SecondaryColors = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-rows:  64px 64px;
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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const GrayScaleGrid = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  margin: 8px;
  float: right;
  background-color: black;
  color: white;
  font-size: 12px;
  border: 2px solid white;
  border-radius: 2px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`

const BigP = styled.p`
  max-width: 550px;
  margin: 0 auto;
`

const SmallP = styled(BigP)`
  max-width: 550px;
  font-size: 12px;
`

const GrayScale = ({ baseColor }) => (
  <GrayScaleGrid>
    {' '.repeat(5).split('').map((_, i) => (
      <ColorSwatch
        key={i} // eslint-disable-line
        style={{
          background: `var(--color-${baseColor}${i})`,
          color: '#000012',
        }}>
        {`${baseColor}${i}`}
      </ColorSwatch>
    ))}
  </GrayScaleGrid>
)

GrayScale.propTypes = {
  baseColor: string.isRequired,
}

const ColorPalette = () => {
  const { primaryColor, setPrimaryColor, resetPrimaryColor } = useContext(ThemeContext)
  return (
    <Wrapper>
      <ParentGrid>
        <PrimaryContainer>
          <PrimarySwatch>--color-primary</PrimarySwatch>
          <div>
            <SliderPicker onChangeComplete={setPrimaryColor} color={primaryColor} />
            <Button type="button" onClick={resetPrimaryColor}>Reset</Button>
          </div>
          <BigP>
            {`
              The colors on this site all depend upon a single CSS variable. Go ahead and change it
              (by clicking on that color slider) and everything will respond to the change immediately.
            `}
          </BigP>
        </PrimaryContainer>
        <SecondaryColors>
          <HighlightSwatch>--color-highlight</HighlightSwatch>
          <InverseSwatch>--color-inverse</InverseSwatch>
          <BigP>
            {`
              The highlight color is a 50 degree turn on the color wheel from the primary color, while the inverse color
              is an exact complement (180 degrees on the wheel), but shifted down in lightness by 18%. This gives the palette
              a distinctive highlight and a dark contrast given a vibrant primary color.
            `}
          </BigP>
        </SecondaryColors>
        <GrayScales>
          <GrayScale baseColor="pGrey" />
          <GrayScale baseColor="iGrey" />
        </GrayScales>
        <BigP>
          {`
            These grayscales will adapt, as well. Systemizing colors and calculating out the palette, rather than
            hardcoding everything as a hexcode, makes sweeping design changes much, much easier. A little restriction
            in the right places can go a long way towards bringing a project together. So much tooling exists
            to make a React project beautiful – why not use it?
          `}
        </BigP>
        <SmallP>
          {`
            This site was built using styled-components and CSS variables. Most of my experience is in working with SASS,
            so having dynamically-accessible styles after the build process is pretty great. If you're a developer, inspect around
            and you'll see all of the CSS variables on this document's HTML element.
          `}
        </SmallP>
      </ParentGrid>
    </Wrapper>
  )
}

export default ColorPalette
