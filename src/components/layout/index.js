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
  const { exitAnimation } = useContext(AnimationContext)

  const playExit = node => {
    let timeline = anime.timeline({
      autoplay: false,
      easing: "easeOutSine",
      duration: 250,
    })

    if (exitAnimation === "opacity") {
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
    } else if (exitAnimation === "case") {
      timeline.add({
        targets: ".project-thumb",
        opacity: 0,
        delay: (_, i) => {
          return i * 150
        },
      })
    }

    window.loadPromise.then(() => timeline.play())
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

    window.loadPromise.then(() => timeline.play())
  }

  return (
    <>
      <div className="background"></div>
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
  )
}

export default Layout
