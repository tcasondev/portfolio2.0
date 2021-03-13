import { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <body>
        <h1> Tanner Cason </h1>
        <h2> Software Developer </h2>
        <p>
          {" "}
          I'm a software developer with a background in consumer electronics
          repair. Located in San Marcos, Texas
        </p>
        <p>My professional interests include:</p>
        <ul>
          <li>Web development.</li>
          <li>Game development.</li>
          <li>Software and hardware problem-solving</li>
        </ul>

        <hr />

        <h2>About Me</h2>
        <p>
          {" "}
          In college I studied Mass Communication and Journalism. Beginning with
          a class project, I started to explore new hobbies which eventually
          lead to starting a podcast network with some friends. Through
          necessity I learned to build our small infrastructure from the ground
          up and that lead me to discover my love for web and softare
          development.
        </p>
        <p>
          {" "}
          I decided to pursue development as a career and shifted my academic
          interests to Thinkful to learn how to make that happen. I hit the
          ground running there and haven't looked back since.
        </p>
        <p>
          If you're looking to add somebody to your professional team, please
          reach out! I'm always thrilled to work with great people on great
          projects.
        </p>

        <br />
      </body>
    );
  }
}
