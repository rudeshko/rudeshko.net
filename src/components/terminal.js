import React, { useState, useEffect } from "react";
import Typed from "typed.js";

import "../sass/terminal.scss";

const Terminal = () => {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const hideCursor = () => {
    [].forEach.call(document.querySelectorAll(".typed-cursor"), function(e) {
      e.parentNode.removeChild(e);
    });
  };
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
  const [step, setStep] = useState(0);
  const [bio] = useState(`
    <span class="tab"></span>Hello, and welcome to my website! My name is Dima, and I am a Full Stack Software Developer with 12+ years of experience in computer programming.
    I am very passionate about web development and working on the latest and greatest technologies such as React, NodeJS, GraphQL, as well as cloud computing and architecture using Microservices and CICD pipelines.
    <br />
    <span class="tab"></span>You can get in touch with me by clicking the links below, as well as find out more about me :)
    <br />
    <br />
    <span class="tab"></span>&ndash; Dima
  `);

  const animateTerminal = async () => {
    setStep(1);
    await delay(500);
    await animateCommand(".command-step1", "cd ./rudeshko.net");
    setStep(2);
    await animateCommand(".command-step2", "", false); //Reset cursor to step 2
    await delay(1500);
    await animateCommand(".command-step2", "cat ./about_me.txt");
    setStep(3);
    await delay(500);
    setStep(4);
    await animateCommand(".command-step4", "", false); //Reset cursor to step 4
  };

  useEffect(() => {
    animateTerminal();
  }, []);

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
          <div
            className="step step3"
            dangerouslySetInnerHTML={{ __html: bio }}
          ></div>
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
  );
};

export default Terminal;
