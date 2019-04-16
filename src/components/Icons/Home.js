import React from "react"

const HomeIcon = ({ width, height, onClick }) => (
  <svg
    id="home-icon"
    viewBox="0 0 100 100"
    aria-labelledby="title"
    width={width}
    height={height}
  >
    <title id="home-icon" lang="en">
      Home Icon
    </title>
    <path
      d="M30,80 v-40 l-10,0 l30,-20 l30,20 l-10,0 v40 z"
      strokeWidth="2"
      strokeLinejoin="round"
      stroke="black"
      fill="none"
    />
  </svg>
  )

export default HomeIcon