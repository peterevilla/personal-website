import React from "react";


const SkillsCard = ({ skills }) => {
  return (
    <div class="lg:max-w-sm rounded overflow-hidde bg-blue-100 shadow hover:shadow-lg hover:bg-yellow-200
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-80
    ">
      <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{skills.title}</div>
        <p class="text-gray-700 text-base">
          {skills.info.map(item => (
            <ul>
              {item}
            </ul>
          ))}
        </p>
      </div>
    </div>
  );
};

export default SkillsCard;
