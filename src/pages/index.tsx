import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import "../styles/home.scss"
import "../styles/index.scss"


const IndexPage: React.FC<PageProps> = () => {
  return (
      <div id={"home-page"}>
        <div id={"home-page-left"} className={"home-page-container"}>
            <div id={"home-page-left-shape"}></div>
            <div id={"home-page-left-img"}></div>
        </div>

        <div id={"home-page-right"} className={"home-page-container"}>
          <h3>I'M ROSHAN JOSE.</h3>
          <h3>CTO @ Ostello India</h3>

          <p>I'm a Full Web Stack Developer & Flutter Developer focused on crafting scalable & optimized infrastructure, I am passionate about building excellent software that improves the lives of those around me.</p>
        </div>
      </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>RoshanJose7</title>
