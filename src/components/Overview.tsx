import { useEffect, useState } from "react";
import source from "/assets/icon-source.svg";

interface PlanetData {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  images: {
    planet: string;
  };
  planetSize: {
    mobile: {
      width: string;
      height: string;
    };
    tablet: {
      width: string;
      height: string;
    };
  };
  buttonColor: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

interface OverviewProps {
  planet: PlanetData;
  activeOption: string;
  handleActiveOption: (option: string) => void;
}

const Overview: React.FC<OverviewProps> = ({
  planet,
  activeOption,
  handleActiveOption,
}) => {
  const useWindowSize = () => {
    const [windowSize, setWindowsSize] = useState({
      screenWidth: 1248,
      screenHeight: 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowsSize({
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  };

  const screenWidth = useWindowSize().screenWidth;

  return (
    <div className="flex flex-col justify-center items-center px-[2.4rem] sm:px-[3.9rem]">
      <img
        src={planet.images.planet}
        alt="planet image"
        style={
          screenWidth > 640
            ? {
                width: planet.planetSize.tablet.width,
                height: planet.planetSize.tablet.height,
              }
            : screenWidth > 0
            ? {
                width: planet.planetSize.mobile.width,
                height: planet.planetSize.mobile.height,
              }
            : undefined
        }
        className="mb-[9.8rem] mt-[9.5rem] sm:mb-[13rem] sm:mt-[14.6rem]"
      />
      <div className="sm:flex sm:items-center sm:gap-[6.9rem]">
        <div className="flex flex-col justify-center items-center sm:items-start sm:w-[50%]">
          <h2 className="text-[4rem] text-white font-antonio font-medium mb-[1.6rem]">
            {planet.name.toUpperCase()}
          </h2>
          <p
            className="text-center text-[1.3rem] text-[#838391] leading-[2.2rem] mb-[3.2rem] 
          sm:text-start md:text-[1.5rem]"
          >
            {planet.overview.content}
          </p>
          <p
            className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem] 
          sm:text-[1.6rem]"
          >
            Source :
            <a
              target="_blank"
              href={planet.overview.source}
              className="flex items-center gap-2 font-bold underline"
            >
              Wikipedia
              <img src={source} alt="source image" />
            </a>
          </p>
        </div>
        <div className="mini:hidden sm:block w-[50%] gap-[1.6rem]">
          <div
            style={
              activeOption === "overview"
                ? { backgroundColor: planet.buttonColor, border: "none" }
                : undefined
            }
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem]"
            onClick={() => handleActiveOption("overview")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px]">
              <span className="mr-[1.7rem] text-[#838391] font-bold">01</span>
              OVERVIEW
            </p>
          </div>

          <div
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem]"
            onClick={() => handleActiveOption("structure")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px]">
              <span className="mr-[1.7rem] text-[1.3rem] text-[#838391] font-bold">
                02
              </span>
              Internal Structure
            </p>
          </div>

          <div
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem]"
            onClick={() => handleActiveOption("surface")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px]">
              <span className="mr-[1.7rem] text-[1.3rem] text-[#838391] font-bold">
                03
              </span>
              Surface Geology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
