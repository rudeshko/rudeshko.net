import React, { useState, useEffect } from "react"
import Typed from "typed.js"

import "../sass/terminal.scss"

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const hideCursor = () => {
  ;[].forEach.call(document.querySelectorAll(".typed-cursor"), function(e) {
    e.parentNode.removeChild(e)
  })
}

const Terminal = () => {
  const [step, setStep] = useState(0)

  const animateCommands = async () => {
    setStep(1)

    await delay(500)

    //TODO: Break down into functions or components
    new Typed(".command-step1", {
      strings: ["cd ./rudeshko.net"],
      typeSpeed: 60,
      cursorChar: "_",
      onComplete: async () => {
        setStep(2)
        new Typed(".command-step2", {
          strings: [""],
          typeSpeed: 60,
          cursorChar: "_",
          onStringTyped: hideCursor,
        }) //TODO: Make a func to reset cursor.
        await delay(1500)

        new Typed(".command-step2", {
          strings: ["cat ./about_me.txt"],
          typeSpeed: 60,
          cursorChar: "_",
          onComplete: async () => {
            setStep(3)
            await delay(500)
            setStep(4)

            new Typed(".command-step4", {
              strings: [""],
              cursorChar: "_",
            })
          },
          onStringTyped: hideCursor,
        })
      },
      onStringTyped: hideCursor,
    })
  }

  useEffect(() => {
    animateCommands()
  }, [])

  return (
    <div id="terminal">
      <div className="heading">
        <div className="controls">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="green"></div>
        </div>
        <div className="title">Terminal &ndash; About Me</div>
      </div>
      <div className="content">
        {step >= 1 && (
          <div className="step step1">
            dima@rudeshko.net: <span className="directory">~</span> ${" "}
            <span className="command-step1"></span>
          </div>
        )}
        {step >= 2 && (
          <div className="step step2">
            dima@rudeshko.net: <span className="directory">~/rudeshko.net</span>{" "}
            <span className="branch">(master)</span> ${" "}
            <span className="command-step2"></span>
          </div>
        )}
        {step >= 3 && (
          <div className="step step3">
            <span className="tab"></span>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
            <br />
            <span className="tab"></span>Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <br />
            <br />
            <span className="tab"></span>&ndash; Dima
          </div>
        )}
        {step >= 4 && (
          <div className="step step4">
            dima@rudeshko.net: <span className="directory">~/rudeshko.net</span>{" "}
            <span className="branch">(master)</span> ${" "}
            <span className="command-step4"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
