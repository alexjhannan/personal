import React from "react"
import styled from "styled-components"
import { TimelineMax, Bounce, Expo } from "gsap";

const SVG = styled.svg`
  width: 300px;
  height: 300px;
  color: black;
  border-radius: 50%;
`

class FuckOff extends React.Component {
  componentDidMount() {
    const tl = new TimelineMax()
  }

  render() {
    return (
      <SVG
        id="fuck-off"
        viewBox="0 0 100 400"
        aria-labelledby="title"
      >
        <title id="fuck-off" lang="en">
          Fuck Off
        </title>
        <g id="fuck-off__f"></g>
        <path d="M20,20 v60" stroke="black" strokeWidth="5" />
      </SVG>
    )
  }
}

export default FuckOff