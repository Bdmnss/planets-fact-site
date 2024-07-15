import { useParams } from "react-router";
import data from "../data.json";
import { useState } from "react";
import source from "/assets/icon-source.svg";

const Planet: React.FC<{ openBurger: boolean }> = ({ openBurger }) => {
  const params = useParams();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);

  const [activeOption, setActiveOption] = useState("overview");

  const handleActiveOption = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className={`${openBurger ? "hidden" : "block"}`}>
      <div
        className="flex justify-evenly text-[#838391] text-[0.9rem] font-bold 
      tracking-[1.93px] border-b-[1px] pt-[2rem] border-[#38384F]"
      >
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

      {activeOption === "overview" ? (
        <div className="flex flex-col justify-center items-center px-[2.4rem]">
          <img
            src={planet?.images.planet}
            alt="planet image"
            style={{
              width: planet?.planetSize.mobile.width,
              height: planet?.planetSize.mobile.height,
            }}
            className="mb-[9.8rem] mt-[9.5rem]"
          />
          <h2 className="text-[4rem] text-white font-antonio font-medium mb-[1.6rem]">
            {planet?.name.toUpperCase()}
          </h2>
          <p className="text-center text-[1.3rem] text-[#838391] leading-[2.2rem] mb-[3.2rem]">
            {planet?.overview.content}
          </p>
          <p className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem]">
            Source :
            <a
              target="_blank"
              href={planet?.overview.source}
              className="flex items-center gap-2 font-bold underline"
            >
              Wikipedia
              <img src={source} alt="source image" />
            </a>
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col px-[2.4rem] gap-[8px]">
        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem]
            py-[0.8rem]"
        >
          <p className="text-[1rem] text-[#838391]">ROTATION TIME</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.rotation.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem]
            py-[0.8rem]"
        >
          <p className="text-[1rem] text-[#838391]">REVOLUTION TIME</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.revolution.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem]
            py-[0.8rem]"
        >
          <p className="text-[1rem] text-[#838391]">RADIUS</p>
          <p className="text-[2rem] text-white font-medium font-antonio tracking-[-0.75px]">
            {planet?.radius.toUpperCase()}
          </p>
        </div>

        <div
          className="flex items-center justify-between border border-[#38384F] px-[2.4rem]
            py-[0.8rem]"
        >
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
