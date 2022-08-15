import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    const title = "front-end";
    const type = {
      front: "front-end",
      back : "back-end"
    }

    const cstyle = {
      red: {color: 'red'},
      green: {color: 'green'}
    };
    return (
        <p>
            Hello, my name is Ait Kaddour Yassin,
            I'm a software enginner student, and i'm interested in being a {title === type.front? <span style={cstyle.green} > front-end developper </span> : <span style={cstyle.red} > back-end developper </span>}.
        </p>
    )
  }
}
