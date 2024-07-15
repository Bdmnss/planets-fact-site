import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Overview from "../components/Overview";
import Structure from "../components/Structure";
import Surface from "../components/Surface";

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
    <div className={`${openBurger ? "hidden" : "block"}`}>
      <div className="flex justify-evenly text-[#838391] text-[0.9rem] font-bold tracking-[1.93px] border-b-[1px] pt-[2rem] border-[#38384F]">
        <p
          onClick={() => handleActiveOption("overview")}
          style={
            activeOption === "overview"
              ? {
                  borderBottom: `4px solid ${planet?.buttonColor}`,
                  paddingBottom: "2rem",
                  color: "white",
                }
              : undefined
          }
        >
          OVERVIEW
        </p>
        <p
          onClick={() => handleActiveOption("structure")}
          style={
            activeOption === "structure"
              ? {
                  borderBottom: `4px solid ${planet?.buttonColor}`,
                  paddingBottom: "2rem",
                  color: "white",
                }
              : undefined
          }
        >
          STRUCTURE
        </p>
        <p
          onClick={() => handleActiveOption("surface")}
          style={
            activeOption === "surface"
              ? {
                  borderBottom: `4px solid ${planet?.buttonColor}`,
                  paddingBottom: "2rem",
                  color: "white",
                }
              : undefined
          }
        >
          SURFACE
        </p>
      </div>

      {activeOption === "overview" && planet ? (
        <Overview planet={planet} />
      ) : activeOption === "structure" && planet ? (
        <Structure planet={planet} />
      ) : activeOption === "surface" && planet ? (
        <Surface planet={planet} />
      ) : (
        ""
      )}
      <div className="flex flex-col px-[2.4rem] gap-[8px]">
        <div className="flex items-center justify-between border border-[#38384F] px-[2.4rem] py-[0.8rem]">
          <p className="text-[1rem] text-[#838391]">ROTATION TIME</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.rotation.toUpperCase()}
          </p>
        </div>

        <div className="flex items-center justify-between border border-[#38384F] px-[2.4rem] py-[0.8rem]">
          <p className="text-[1rem] text-[#838391]">REVOLUTION TIME</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.revolution.toUpperCase()}
          </p>
        </div>

        <div className="flex items-center justify-between border border-[#38384F] px-[2.4rem] py-[0.8rem]">
          <p className="text-[1rem] text-[#838391]">RADIUS</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.radius.toUpperCase()}
          </p>
        </div>

        <div className="flex items-center justify-between border border-[#38384F] px-[2.4rem] py-[0.8rem]">
          <p className="text-[1rem] text-[#838391]">AVERAGE TEMP</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.temperature.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
