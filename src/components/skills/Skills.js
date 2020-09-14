import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillsData } from "./SkillsData";
const bg = require("../../bg/bg2.svg");
const Skills = () => {
  return (
    <div style={{ backgroundImage: "url(" + bg + ")"}}>
      <h1 className="text-3xl text-center pt-8 ">Skills</h1>
      <div className="flex  justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-t pt-2">
          {SkillsData.map((items) => (
            <SkillsCard skills={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
