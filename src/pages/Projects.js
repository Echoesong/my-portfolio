import { useState, useEffect } from "react";
import "../App.css";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="projectStyling">
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <img src={project.image} alt={"App Image"} />
        <div className="flex flex-row">
          <a
            className="mx-1 mb-3"
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn my-1">Github</button>
          </a>
          {project.live ? (
            <a
              className="mx-1 mb-3"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn my-1">Live site</button>
            </a>
          ) : null}
        </div>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
