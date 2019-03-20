import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  hideOnClick = () => {
    const element = this.ref.current.imageRef.current

    if (this.animation && this.animation.playState === 'running') {
      this.animation.cancel()
      element.animate([
        { opacity: '1' },
        { opacity: '0.3' },
      ], {
        duration: 50,
        direction: 'alternate',
        iterations: 10,
        composite: 'add',
      })
      return
    }

    this.animation = element.animate([
      { transform: 'translateY(0%)' },
      { transform: 'translateY(30%)' },
    ], {
      duration: 300,
      easing: 'ease-in-out',
      direction: 'alternate',
      iterations: 4,
    })

    this.animation.onfinish = () => {
      element.animate([
        { opacity: '1' },
        { opacity: '0' },
      ], {
        duration: 500,
      })
    }

    this.animation.oncancel = () => {
      element.animate([
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' },
      ], {
        duration: 500,
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Animation Play" keywords={[`animation`, `react`, `web animations API`]} />
        <div onClick={this.hideOnClick} style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image ref={this.ref} />
        </div>
        <Link to="/animation-play/">Animation Play</Link>
      </Layout>
    )
  }
}

export default IndexPage
