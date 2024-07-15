import PlanetType from "../Types";

interface PlanetStatsProps {
  planet?: PlanetType;
}

const PlanetStats: React.FC<PlanetStatsProps> = ({ planet }) => {
  return (
    <div className="flex flex-col px-[2.4rem] gap-[8px] sm:flex-row sm:justify-evenly">
      <div
        className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem] lg:w-auto
        lg:pl-[2rem] lg:pr-[6rem] lg:py-[2.5rem] xl:pl-[2.4rem] xl:pr-[8rem] xl:py-[2.5rem]"
      >
        <p
          className="text-[1rem] text-[#838391] font-bold sm:mb-[6px] sm:text-[1.3rem]
          xl:text-[1.7rem] lg:text-[1.5rem]"
        >
          ROTATION TIME
        </p>
        <p
          className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px]
          md:text-[2.2rem] xl:text-[4rem] lg:text-[3rem]"
        >
          {planet?.rotation.toUpperCase()}
        </p>
      </div>

      <div
        className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem] lg:w-auto
        lg:pl-[2rem] lg:pr-[6rem] lg:py-[2.5rem] xl:pl-[2.4rem] xl:pr-[8rem] xl:py-[2.5rem]"
      >
        <p
          className="text-[1rem] text-[#838391] font-bold sm:text-[1.3rem] xl:text-[1.7rem] 
          lg:text-[1.5rem]"
        >
          REVOLUTION TIME
        </p>
        <p
          className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          xl:text-[4rem] lg:text-[3rem]"
        >
          {planet?.revolution.toUpperCase()}
        </p>
      </div>

      <div
        className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem] lg:w-auto
        lg:pl-[2rem] lg:pr-[6rem] lg:py-[2.5rem] xl:pl-[2.4rem] xl:pr-[8rem] xl:py-[2.5rem]"
      >
        <p
          className="text-[1rem] text-[#838391] font-bold sm:text-[1.3rem] xl:text-[1.7rem]
          lg:text-[1.5rem]"
        >
          RADIUS
        </p>
        <p
          className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          xl:text-[4rem] lg:text-[3rem]"
        >
          {planet?.radius.toUpperCase()}
        </p>
      </div>

      <div
        className="flex items-center justify-between border border-[#38384F] px-[2.4rem] 
        py-[0.8rem] sm:flex-col sm:items-start sm:px-[1.5rem] sm:w-[25%] sm:py-[1.5rem] lg:w-auto
        lg:pl-[2rem] lg:pr-[6rem] lg:py-[2.5rem] xl:pl-[2.4rem] xl:pr-[8rem] xl:py-[2.5rem]"
      >
        <p
          className="text-[1rem] text-[#838391] font-bold sm:text-[1.3rem] xl:text-[1.7rem]
          lg:text-[1.5rem]"
        >
          AVERAGE TEMP
        </p>
        <p
          className="text-[1.8rem] text-white font-medium font-antonio tracking-[-0.75px] 
          md:text-[2.2rem] xl:text-[4rem] lg:text-[3rem]"
        >
          {planet?.temperature.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default PlanetStats;
