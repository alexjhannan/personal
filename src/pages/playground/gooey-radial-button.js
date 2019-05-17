import React, { useState } from 'react'
import styled from 'styled-components'
import { reduceFraction } from '~utilities'
import GooeyRadialButton from '~components/gooey-radial-button'
import Layout from '~components/layout'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 24px;
`

const LabelText = styled.span`
  display: block;
  text-align: center;
`

const GooeyRadialPage = () => {
  const [buttonCount, setButtonCount] = useState(12)
  const [initialAngleConstant, setInitialAngle] = useState(0)
  const [numer, denom] = reduceFraction([initialAngleConstant, 12])
  const initialAngleDisplay = `${numer}${denom > 1 ? `/${denom}` : ''}${numer > 0 ? 'π' : ''} radians`
  return (
    <Layout>
      <GooeyRadialButton
        centerLabel="Boop"
        buttonDuples={
          ' '.repeat(buttonCount).split('').map((_, i) => ({
            label: (i + 1).toString(),
            onClick: () => {},
          }))
        }
        initialAngle={(initialAngleConstant / 12) * Math.PI} />
      <ControlContainer>
        <Label htmlFor="button-count">
          <input
            id="button-count"
            type="range"
            min="1"
            max="16"
            value={buttonCount}
            onChange={e => setButtonCount(e.target.value)} />
          <LabelText>
            {`${buttonCount} radial buttons`}
          </LabelText>
        </Label>
        <Label htmlFor="initial-angle">
          <input
            id="initial-angle"
            type="range"
            min="0"
            max="24"
            value={initialAngleConstant}
            onChange={e => setInitialAngle(e.target.value)} />
          <LabelText>
            {`buttons start at ${initialAngleDisplay}`}
          </LabelText>
        </Label>
      </ControlContainer>
    </Layout>
  )
}

export default GooeyRadialPage
