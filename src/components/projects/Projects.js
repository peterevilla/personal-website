import React from "react";
import ProjectsCard from "./ProjectsCard";
import {projectsData} from "./projectsData"

const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl text-center pt-12 mt-56 border-b">Projects</h1>
      <div className="flex  justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-48 gap-4  pt-4 ">
          {projectsData.map(items => (
            <ProjectsCard project={items}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
