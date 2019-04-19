import React, { useEffect } from 'react'
import { TimelineMax } from 'gsap'
import styled from 'styled-components'
import BaseSVG from '~components/BaseSVG'

const SVG = styled(BaseSVG)`
  background: purple;
`

const UnderConstruction = () => {
  useEffect(() => {
    const tl = new TimelineMax({ yoyo: true, repeat: -1 })
    tl.add('init')
      .fromTo('.uc-circle-1', 0.5, { x: 25, y: 25 }, { x: 10, y: 10 }, 0)
      .fromTo('.uc-circle-2', 0.5, { x: 25, y: -25 }, { x: 10, y: -10 }, 0)
      .fromTo('.uc-circle-3', 0.5, { x: -25, y: 25 }, { x: -10, y: 10 }, 0)
      .fromTo('.uc-circle-4', 0.5, { x: -25, y: -25 }, { x: -10, y: -10 }, 0)
    return () => tl.kill()
  })

  return (
    <SVG id="under-construction" title="Under Construction" viewBox="0 0 100 100">
      <circle className="uc-circle-1" cx="50" cy="50" r="20" fill="blue" />
      <circle className="uc-circle-2" cx="50" cy="50" r="20" fill="green" />
      <circle className="uc-circle-3" cx="50" cy="50" r="20" fill="red" />
      <circle className="uc-circle-4" cx="50" cy="50" r="20" fill="yellow" />
    </SVG>
  )
}

export default UnderConstruction
