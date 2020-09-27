import React, { useContext, useEffect } from "react"
import "../../styles/main.scss"
import Nav from "../nav"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "../footer"
import { LayoutContext } from "../../contexts/layoutContext"
import { AnimationContext } from "../../contexts/animationContext"
import ColorMode from "../colorMode"
import { Transition, SwitchTransition } from "react-transition-group"
import anime from "animejs"
import FontFaceObserver from "fontfaceobserver"
import imagesLoaded from "imagesloaded"

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
  const { exitAnimation, setAnimationsCanRuns, animationsCanRuns } = useContext(
    AnimationContext
  )

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

  useEffect(() => {
    const font = new FontFaceObserver("Garbata-Regular")
    const fontTwo = new FontFaceObserver("Geomanist")
    const fontThree = new FontFaceObserver("TimesNewRoman-Italic")
    const imgLoaded = imagesLoaded(
      document.querySelector("body"),
      { background: true },
      null
    )

    Promise.all([
      window.loadPromise,
      font.load(null, 5000),
      fontTwo.load(null, 5000),
      fontThree.load(null, 5000),
      imgLoaded.on("done"),
    ]).then(function () {
      console.log("DOMContent loaded")
      console.log("Family A & B & C have loaded")
      console.log("all images are loaded")
      setAnimationsCanRuns(true)
    })
  }, [setAnimationsCanRuns])

  return (
    <>
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
    </>
  )
}

export default Layout
