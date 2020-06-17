import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <div className="flex  justify-center">
        <div className="grid grid-cols-1 mt-32 lg:grid-cols-3 gap-4">
          <ProjectsCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
