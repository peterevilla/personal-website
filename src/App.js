import React from "react";
import NavBar from "./components/NavBar"


function App() {
  

  return (
    <div className="h-screen">
      <div className="lg:flex text-md mt-16 ml-16">
        <div className="lg:mr-64">
        <h2 className="text-gray-500">Pedro Revilla</h2>
        <h2 className="italic text-gray-700">Full Stack Developer</h2>
        </div>
        <div className="ml-32 mt-16 lg:ml-64 lg:mt-0">
          <NavBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
