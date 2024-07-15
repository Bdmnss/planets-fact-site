import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Overview from "../components/Overview";
import Structure from "../components/Structure";
import Surface from "../components/Surface";
import PlanetTabs from "../components/PlanetTabs";
import PlanetStats from "../components/PlanetStats";

interface PlanetProps {
  openBurger: boolean;
  screenWidth: number;
}

const Planet: React.FC<PlanetProps> = ({ openBurger, screenWidth }) => {
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
          screenWidth={screenWidth}
        />
      ) : activeOption === "structure" && planet ? (
        <Structure
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
          screenWidth={screenWidth}
        />
      ) : activeOption === "surface" && planet ? (
        <Surface
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
          screenWidth={screenWidth}
        />
      ) : (
        ""
      )}

      <PlanetStats planet={planet} />
    </div>
  );
};

export default Planet;
