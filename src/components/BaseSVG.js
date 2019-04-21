import React from 'react'
import { string, node } from 'prop-types'

const BaseSVG = ({
  id,
  title,
  children,
  ...rest
}) => (
  <svg
    aria-labelledby="title"
    xlmns="http://www.w3.org/2000/svg"
    id={id}
    {...rest}>
    <title id={id} lang="en">
      {title}
    </title>
    {children}
  </svg>
)

BaseSVG.propTypes = {
  viewBox: string.isRequired,
  id: string.isRequired,
  title: string.isRequired,
  children: node.isRequired,
  role: string,
}

BaseSVG.defaultProps = {
  role: 'presentation',
}

export default BaseSVG
