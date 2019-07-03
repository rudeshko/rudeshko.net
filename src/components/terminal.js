import React, { useState, useEffect } from "react"
import Typed from "typed.js"

import "../sass/terminal.scss"

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const Terminal = () => {
  const [step, setStep] = useState(0)
  const animateCommands = async () => {
    setStep(1)

    await delay(500)

    new Typed(".command1", {
      strings: ["cd ./rudeshko.net"],
      typeSpeed: 60,
      cursorChar: "_",
      onComplete: async () => {
        setStep(2)
        await delay(1000)

        new Typed(".command2", {
          strings: ["cat ./about_me.txt"],
          typeSpeed: 60,
          cursorChar: "_",
          onComplete: async () => {
            setStep(3)
            await delay(1000)
            setStep(4)

            new Typed(".command3", {
              strings: [""],
              cursorChar: "_",
            })
          },
        })
      },
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
      </div>
      <div className="content">
        {step >= 1 && (
          <div className={`step`}>
            dima@rudeshko.net: <span className="directory">~</span> ${" "}
            <span className="command1"></span>
          </div>
        )}
        {step >= 2 && (
          <div className="step step2">
            dima@rudeshko.net: <span className="directory">~/rudeshko.net</span>{" "}
            <span className="branch">(master)</span> ${" "}
            <span className="command2"></span>
          </div>
        )}
        {step >= 3 && (
          <div className="step step3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        )}
        {step >= 4 && (
          <div className="step step4">
            dima@rudeshko.net: <span className="directory">~/rudeshko.net</span>{" "}
            <span className="branch">(master)</span> ${" "}
            <span className="command3"></span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
