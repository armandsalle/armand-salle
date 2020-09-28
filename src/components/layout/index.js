import React, { useContext } from "react"
import "../../styles/main.scss"
import Nav from "../nav"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer"
import { LayoutContext } from "../../contexts/layoutContext"
import { AnimationContext } from "../../contexts/animationContext"
import ColorMode from "../colorMode"
import { Transition, SwitchTransition } from "react-transition-group"
import anime from "animejs"
import Loaded from "../loaded"

const Layout = ({ children, location }) => {
  const {
    layoutJson: { footer },
  } = useStaticQuery(graphql`
    {
      layoutJson {
        footer {
          socialLinks {
            textLink
            url
          }
          text
        }
      }
    }
  `)

  const { hasFooter } = useContext(LayoutContext)
  const { exitAnimation, animationsCanRuns } = useContext(AnimationContext)

  const playExit = node => {
    let timeline = anime.timeline({
      autoplay: false,
      easing: "easeOutSine",
      duration: 250,
      begin: () => {
        document.querySelector("body").style.pointerEvents = "none"
      },
      complete: () => {
        document.querySelector("body").style.pointerEvents = "all"
      },
    })

    if (exitAnimation.name === "opacity") {
      timeline
        .add({
          targets: node,
          opacity: 0,
        })
        .add(
          {
            targets: "footer",
            opacity: 0,
          },
          "-=100"
        )
    } else if (exitAnimation.name === "case") {
      timeline
        .add({
          targets: ".project-thumb",
          opacity: 0,
          delay: (_, i) => {
            return i * 50
          },
          duration: 125,
        })
        .add(
          {
            targets: node,
            opacity: 0,
            duration: 125,
          },
          "-=125"
        )
    }

    if (animationsCanRuns) {
      timeline.play()
    }
  }

  const playEnter = () => {
    const timeline = anime
      .timeline({
        autoplay: false,
        easing: "easeOutSine",
        duration: 100,
        delay: 100,
      })
      .add({
        targets: "footer",
        opacity: 1,
      })

    if (!!animationsCanRuns) {
      timeline.play()
    }
  }

  return (
    <Loaded>
      <div className="background"></div>
      {animationsCanRuns && (
        <>
          <ColorMode />
          <Nav />
          <SwitchTransition mode="out-in">
            <Transition
              key={location.pathname}
              timeout={500}
              onExit={node => playExit(node)}
              onEnter={node => playEnter(node)}
            >
              <main>{children}</main>
            </Transition>
          </SwitchTransition>
          {hasFooter && <Footer footer={footer} />}
        </>
      )}
    </Loaded>
  )
}

export default Layout
