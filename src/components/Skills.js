import React from 'react'
import SkillsCard from './SkillsCard'

const Skills = () => {
    return (
        <div className="flex justify-center">
        <div className="grid grid-cols-1 mt-32 lg:grid-cols-3 gap-4">
            <SkillsCard/>
            <SkillsCard/>
            <SkillsCard/>
        </div>
        </div>
    )
}

export default Skills;
