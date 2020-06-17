import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillsData } from "./SkillsData";

const Skills = () => {
  return (
    <div>
      <h1 className="text-xl text-center">Skills</h1>
      <div className="flex  justify-center">
        <div className="grid grid-cols-1 mt-16 lg:grid-cols-3 gap-4">
          {SkillsData.map((items) => (
            <SkillsCard skills={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
