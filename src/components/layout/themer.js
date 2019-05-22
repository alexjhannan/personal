import React, { useState } from 'react'
import { node } from 'prop-types'
import { createGlobalStyle } from 'styled-components'

const initialState = {
  primaryColor: {
    h: 0,
    s: 0.53,
    l: 0.58,
  },
}

export const ThemeContext = React.createContext()

const GlobalStyle = createGlobalStyle`
  html {
    --color-primary-hue: ${props => props.primaryColor.h};
    --color-saturation: ${props => props.primaryColor.s * 100}%;
    --color-lightness: ${props => props.primaryColor.l * 100}%;

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
  }
`

const Themer = ({ children }) => {
  const [state, setState] = useState(initialState)

  const setPrimaryColor = ({ hsl }) => {
    setState({
      ...state,
      primaryColor: {
        ...hsl,
      },
    })
  }

  const resetPrimaryColor = () => {
    setState({
      ...state, primaryColor: initialState.primaryColor,
    })
  }

  const context = { ...state, setPrimaryColor, resetPrimaryColor }

  return (
    <ThemeContext.Provider value={context}>
      <GlobalStyle primaryColor={state.primaryColor} />
      {children}
    </ThemeContext.Provider>
  )
}

Themer.propTypes = {
  children: node.isRequired,
}

export default Themer
