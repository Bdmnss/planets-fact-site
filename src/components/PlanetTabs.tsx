import React from "react";

interface PlanetTabsProps {
  activeOption: string;
  handleActiveOption: (option: string) => void;
  planetColor?: string;
}

const PlanetTabs: React.FC<PlanetTabsProps> = ({
  activeOption,
  handleActiveOption,
  planetColor = "#FFFFFF",
}) => {
  return (
    <div className="flex justify-evenly text-[#838391] text-[0.9rem] font-bold tracking-[1.93px] border-b-[1px] pt-[2rem] border-[#38384F] sm:hidden">
      <p
        onClick={() => handleActiveOption("overview")}
        style={
          activeOption === "overview"
            ? {
                borderBottom: `4px solid ${planetColor}`,
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
                borderBottom: `4px solid ${planetColor}`,
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
                borderBottom: `4px solid ${planetColor}`,
                paddingBottom: "2rem",
                color: "white",
              }
            : undefined
        }
      >
        SURFACE
      </p>
    </div>
  );
};

export default PlanetTabs;
