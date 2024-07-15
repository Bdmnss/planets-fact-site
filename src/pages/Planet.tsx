import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Overview from "../components/Overview";
import Structure from "../components/Structure";
import Surface from "../components/Surface";
import PlanetTabs from "../components/PlanetTabs";

interface PlanetProps {
  openBurger: boolean;
}

const Planet: React.FC<PlanetProps> = ({ openBurger }) => {
  const params = useParams<{ planet: string }>();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);

  const [activeOption, setActiveOption] = useState("overview");

  const handleActiveOption = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className={`${openBurger ? "hidden" : "block"} pb-[5rem]`}>
      <PlanetTabs
        activeOption={activeOption}
        handleActiveOption={handleActiveOption}
        planetColor={planet?.buttonColor}
      />

      {activeOption === "overview" && planet ? (
        <Overview
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
        />
      ) : activeOption === "structure" && planet ? (
        <Structure
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
        />
      ) : activeOption === "surface" && planet ? (
        <Surface
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
        />
      ) : (
        ""
      )}

      <div className="flex flex-col px-[2.4rem] gap-[8px] sm:flex-row sm:justify-evenly">
        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem]"
        >
          <p className="text-[1rem] text-[#838391] sm:mb-[6px] sm:text-[1.3rem]">
            ROTATION TIME
          </p>
          <p
            className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px]
          md:text-[2.2rem]"
          >
            {planet?.rotation.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem]"
        >
          <p className="text-[1rem] text-[#838391] sm:text-[1.3rem]">
            REVOLUTION TIME
          </p>
          <p
            className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          md:text-[2.2rem]"
          >
            {planet?.revolution.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem]"
        >
          <p className="text-[1rem] text-[#838391] sm:text-[1.3rem]">RADIUS</p>
          <p
            className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          md:text-[2.2rem]"
          >
            {planet?.radius.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem]"
        >
          <p className="text-[1rem] text-[#838391] sm:text-[1.3rem]">
            AVERAGE TEMP
          </p>
          <p
            className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          md:text-[2.2rem]"
          >
            {planet?.temperature.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
