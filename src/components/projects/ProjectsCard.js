import React from "react";


const ProjectsCard = ({project}) => {
  return (
    <div class="lg:max-w-sm rounded overflow-hidden shadow hover:shadow-lg w-full">
      <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">{project.title}</div>
  <p class="text-gray-700 text-base">{project.info}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
