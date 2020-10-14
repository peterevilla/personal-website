import React from "react";
import GithubIcon from "../../components/icons/GithubIcon";

const ProjectsCard = ({ project }) => {
  const tags = project.tags;
  return (
    <div
      className="p-4 lg:max-w-sm rounded-lg overflow-hidden shadow hover:shadow-lg w-full
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-80
    "
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.title}</div>
        <img className=" w-full p-4" src={project.image} alt="project"></img>
        <p className="text-gray-700 text-base">{project.info}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {tags}
        </span>
        <div className="flex">
          <a href={`${project.github_url}`} className="m-2">
            <GithubIcon />
          </a>
          <a href={`${project.page_url}`} className="m-2">
            <p>Live</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
