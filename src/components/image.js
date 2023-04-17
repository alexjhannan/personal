import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Image = React.forwardRef((props, ref) => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `}
    render={(data) => <GatsbyImage {...props} ref={ref} image={data.placeholderImage.childImageSharp.fluid} />}
  />
))

export default Image
