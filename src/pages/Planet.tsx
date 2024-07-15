import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import PlanetTabs from "../components/PlanetTabs";
import PlanetStats from "../components/PlanetStats";
import PlanetMainInfo from "../components/PlanetMainInfo";

interface PlanetProps {
  openBurger: boolean;
  screenWidth: number;
}

const Planet: React.FC<PlanetProps> = ({ openBurger, screenWidth }) => {
  const params = useParams<{ planet: string }>();
  const planetName = params.planet;

  const planet = data.find((planetObj) => planetObj.name === planetName);

  const [activeOption, setActiveOption] = useState<
    "overview" | "geology" | "structure"
  >("overview");

  const handleActiveOption = (option: "overview" | "geology" | "structure") => {
    setActiveOption(option);
  };

  return (
    <div className={`${openBurger ? "hidden" : "block"} pb-[5rem]`}>
      <PlanetTabs
        activeOption={activeOption}
        handleActiveOption={handleActiveOption}
        planetColor={planet?.buttonColor}
      />

      {planet && (
        <PlanetMainInfo
          planet={planet}
          activeOption={activeOption}
          handleActiveOption={handleActiveOption}
          screenWidth={screenWidth}
        />
      )}

      <PlanetStats planet={planet} />
    </div>
  );
};

export default Planet;
