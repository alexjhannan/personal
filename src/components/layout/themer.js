import React, { useState } from 'react'
import { node } from 'prop-types'
import { createGlobalStyle } from 'styled-components'

const initialContextState = {
  colorPrimaryHue: 0,
}

export const ThemeContext = React.createContext()

const GlobalStyle = createGlobalStyle`
  html {
    --color-saturation: 53%;
    --color-lightness: 58%;
    --color-primary-hue: ${props => props.colorPrimaryHue};
    --color-primary-hue-deg: ${props => props.colorPrimaryHue}deg;

    --color-primary: hsl(
      var(--color-primary-hue),
      var(--color-saturation),
      var(--color-lightness)
    );

    --color-inverse: hsl(
      calc(var(--color-primary-hue) + 180),
      var(--color-saturation),
      calc(var(--color-lightness) - 18%)
    );

    --color-highlight: hsl(
      calc(var(--color-primary-hue) + 50),
      var(--color-saturation),
      var(--color-lightness)
    );

    --color-pGrey0: #faf9f9;
    --color-pGrey1: #e6dfdf;
    --color-pGrey2: #cec0c0;
    --color-pGrey3: #b19a9a;
    --color-pGrey4: #7b6767;

    --color-iGrey0: #f8f9f9;
    --color-iGrey1: #dce1e1;
    --color-iGrey2: #bbc5c5;
    --color-iGrey3: #91a3a3;
    --color-iGrey4: #577070;

    --display-font-stack: Dancing Script, georgia, serif;
    --serif-font-stack: Arvo, georgia, serif;
    --sans-font-stack: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  }
`

const Themer = ({ children }) => {
  const [contextState, setContextState] = useState(initialContextState)

  const setPrimaryColorHue = (colorPrimaryHue) => {
    setContextState({
      ...contextState,
      colorPrimaryHue,
    })
  }

  const context = { ...contextState, setPrimaryColorHue }

  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyle colorPrimaryHue={context.colorPrimaryHue} />
      {children}
    </ThemeContext.Provider>
  )
}

Themer.propTypes = {
  children: node.isRequired,
}

export default Themer
