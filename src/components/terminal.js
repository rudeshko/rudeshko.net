import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";

import "../sass/terminal.scss";

const Terminal = () => {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  // const [customInput, setCustomInput] = useState("");
  const [bio] = useState(`
    <span class="tab"></span>Hello, and welcome to my website! My name is Dima, and I am a Full Stack Software Developer with 12+ years of experience in computer programming.
    I am very passionate about web development and working with the latest and greatest technologies such as React, NodeJS, GraphQL, as well as cloud computing and architecture using Microservices and CICD pipelines.
    <br />
    <span class="tab"></span>You can get in touch with me, and find out more about what I do by clicking on the links below :)
    <br />
    <br />
    <span class="tab"></span>&ndash; Dima
  `);
  const customInputRef = useRef();

  // Methods TODO: Add comments (jsdoc)
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const hideCursor = () => {
    [].forEach.call(document.querySelectorAll(".typed-cursor"), function(e) {
      e.parentNode.removeChild(e);
    });
  };

  const resetCursor = async className => animateCommand(className, "", false);

  const animateTerminal = async () => {
    setIsTyping(true);
    setLoaded(true);
    await delay(500);
    setStep(1);
    await delay(500);
    await animateCommand(".command-step1", "cd ./rudeshko.net");
    setStep(2);
    await resetCursor(".command-step2");
    await delay(1500);
    await animateCommand(".command-step2", "cat ./about_me.txt");
    setStep(3);
    await delay(500);
    setStep(4);
    await resetCursor(".command-step4");
    setIsTyping(false);
    // customInputRef.current.focus(); //TODO: Make the custom command editable
  };

  const controlClose = async () => {
    if (isTyping) return;

    setLoaded(false);
    await delay(1000);
    setStep(0);
    setMinimized(false);
    animateTerminal();
  };

  const controlMinimized = async () => {
    if (fullScreen) return;

    setMinimized(!minimized);
  };

  const controlFullScreen = async () => {
    setFullScreen(!fullScreen);
  };

  useEffect(() => {
    animateTerminal();
  }, []);

  const animateCommand = (className, command, autoHideCursor = true) =>
    new Promise((resolve, reject) => {
      new Typed(className, {
        strings: [command],
        typeSpeed: 60,
        cursorChar: "_",
        onComplete: () => {
          resolve();
        },
        onStringTyped: autoHideCursor ? hideCursor : () => {},
      });
    });

  return (
    <div
      id="terminal"
      className={[
        loaded ? "visible" : "",
        minimized ? "minimized" : "",
        fullScreen ? "fullscreen" : "",
      ].join(" ")}
    >
      <div className="heading">
        <div className="controls">
          <div className="red" onClick={controlClose}></div>
          <div className="yellow" onClick={controlMinimized}></div>
          <div className="green" onClick={controlFullScreen}></div>
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
          <div
            className="step step3"
            dangerouslySetInnerHTML={{ __html: bio }}
          ></div>
        )}
        {step >= 4 && (
          <div className="step step4">
            dima@rudeshko.net: <span className="directory">~/rudeshko.net</span>{" "}
            <span className="branch">(master)</span> ${" "}
            <span className="command-step4" ref={customInputRef}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
