import { Component } from "react";

export default class ProjectsPage extends Component {
  render() {
    return (
      <body>
        <h2>Channel 3 Media</h2>
        <p>
          {" "}
          Channel 3 media is what grew from a small class project during my Mass
          Communication studies. We are a podcast network that strives to
          support small podcasters.
        </p>
        <br />
        <p>My work with Channel 3 has included:</p>
        <ul>
          <li>
            Creating and maintaining various incarnations of our website.
            <ul>
              <li>
                Our current website is hosted and built through Wix but I have
                also used SquareSpace and Wordpress for our content.
              </li>
            </ul>
          </li>
          <li>
            Hosting, producing, and distributing podcast episodes and related
            materials.
          </li>
          <li>
            Creating every element of out brand including:
            <ul>
              <li>Graphic design elements and logos,</li>
              <li>Music and sound bytes for production.</li>
              <li>Formats for various shows and projects.</li>
            </ul>
          </li>
          <li>Working with a great team to accomplish mutual goals.</li>
        </ul>
        <br />
        <p>
          Channel 3 Media and related information can be found at{" "}
          <a href="https://channel3media.com">channel3media.com</a>
        </p>
        <hr />
        <h2>Movie Ouija</h2>
        <p>Movie Ouija is a project I created to solve a problem faced in 
            my household regularly: What are we going to watch? The app
            allows users to curate a list of movies to which they have access 
            and then calls upon the spirit realm to divine a choice from that list.
            Movie Ouija was created using ReactJS for the front-end and Express and NodeJS for the 
            back-end. All user-specific information is stored on a Postgresql database.</p>
        <p>Link to <a href="https://movie-ouija.vercel.app/">live app</a></p>
        <p>Link to <a href="https://github.com/tcasondev/movie-ouija">back-end repo</a></p>
        <p>Link to <a href="https://github.com/tcasondev/movie-ouija-api">front-end repo</a></p>
            
        <hr />
        <h2>Vaporun</h2>
        <p>
          Vaporun is a small game that I am developing for mobile devices using
          C# and the Unity engine. More information to come!
        </p>
      </body>
    );
  }
}
