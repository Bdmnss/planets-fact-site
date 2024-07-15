import source from "/assets/icon-source.svg";

interface PlanetData {
  name: string;
  structure: {
    content: string;
    source: string;
  };
  images: {
    internal: string;
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
    desktop: {
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

interface StructureProps {
  planet: PlanetData;
  activeOption: string;
  handleActiveOption: (option: string) => void;
  screenWidth: number;
}

const Structure: React.FC<StructureProps> = ({
  planet,
  activeOption,
  handleActiveOption,
  screenWidth,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center px-[2.4rem] sm:px-[3.9rem] 
    lg:flex-row lg:mt-[12.6rem] lg:mb-[6rem]"
    >
      <div className="lg:w-[65%] flex justify-center">
        <img
          src={planet.images.internal}
          alt="planet image"
          style={
            screenWidth > 1024
              ? {
                  width: planet.planetSize.desktop.width,
                  height: planet.planetSize.desktop.height,
                }
              : screenWidth >= 640
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
      </div>
      <div
        className="sm:flex sm:items-center sm:gap-[6.9rem] lg:flex-col lg:w-[35%] lg:gap-[0rem] 
      lg:pr-[15rem]"
      >
        <div className="flex flex-col justify-center items-center sm:items-start sm:w-[50%] lg:w-[100%]">
          <h2
            className="text-[4rem] text-white font-antonio font-medium mb-[1.6rem] lg:text-[5rem]
          xl:text-[7rem]"
          >
            {planet.name.toUpperCase()}
          </h2>
          <p
            className="text-center text-[1.3rem] text-[#838391] leading-[2.2rem] mb-[3.2rem] 
          sm:text-start md:text-[1.5rem] lg:text-[2rem] lg:leading-[2.5rem]"
          >
            {planet.structure.content}
          </p>
          <p
            className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem] 
          sm:text-[1.6rem] lg:text-[2rem]"
          >
            Source :
            <a
              target="_blank"
              href={planet.structure.source}
              className="flex items-center gap-2 font-bold underline"
            >
              Wikipedia
              <img src={source} alt="source image" />
            </a>
          </p>
        </div>
        <div className="mini:hidden sm:block w-[50%] gap-[1.6rem] lg:w-[100%]">
          <div
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem] lg:py-[1.3rem]
            cursor-pointer hover:bg-[#d8d8d8] duration-500"
            onClick={() => handleActiveOption("overview")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px] lg:text-[1.5rem]">
              <span className="mr-[1.7rem] text-[1.3rem] text-[#838391] font-bold">
                01
              </span>
              OVERVIEW
            </p>
          </div>

          <div
            style={
              activeOption === "structure"
                ? { backgroundColor: planet.buttonColor, border: "none" }
                : undefined
            }
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem] lg:py-[1.3rem]
            cursor-pointer"
            onClick={() => handleActiveOption("structure")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px] lg:text-[1.5rem]">
              <span className="mr-[1.7rem] text-[1.3rem] text-[#838391] font-bold">
                02
              </span>
              Internal Structure
            </p>
          </div>

          <div
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem] lg:py-[1.3rem]
            cursor-pointer hover:bg-[#d8d8d8] duration-500"
            onClick={() => handleActiveOption("surface")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px] lg:text-[1.5rem]">
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

export default Structure;
