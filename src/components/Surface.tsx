import source from "/assets/icon-source.svg";

interface PlanetData {
  name: string;
  geology: {
    content: string;
    source: string;
  };
  images: {
    planet: string;
    geology: string;
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
  geologySize: {
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

interface SurfaceProps {
  planet: PlanetData;
  activeOption: string;
  handleActiveOption: (option: string) => void;
  screenWidth: number;
}

const Surface: React.FC<SurfaceProps> = ({
  planet,
  activeOption,
  handleActiveOption,
  screenWidth,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-[2.4rem] relative sm:px-[3.9rem]">
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
      <img
        src={planet.images.geology}
        alt="geology image"
        style={
          screenWidth > 640
            ? {
                width: planet.geologySize.tablet.width,
                height: planet.geologySize.tablet.height,
              }
            : screenWidth > 0
            ? {
                width: planet.geologySize.mobile.width,
                height: planet.geologySize.mobile.height,
              }
            : undefined
        }
        className="absolute top-[20rem] sm:top-[32rem]"
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
            {planet.geology.content}
          </p>
          <p
            className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem]
          sm:text-[1.6rem]"
          >
            Source :
            <a
              target="_blank"
              href={planet.geology.source}
              className="flex items-center gap-2 font-bold underline"
            >
              Wikipedia
              <img src={source} alt="source image" />
            </a>
          </p>
        </div>
        <div className="mini:hidden sm:block w-[50%] gap-[1.6rem]">
          <div
            className="pl-[2rem] py-[1rem] border-[1px] border-[#838391] mb-[1.6rem]"
            onClick={() => handleActiveOption("overview")}
          >
            <p className="text-[1.3rem] text-white font-bold tracking-[1.93px]">
              <span className="mr-[1.7rem] text-[1.3rem] text-[#838391] font-bold">
                01
              </span>
              OVERVIEW
            </p>
          </div>

          <div
            style={
              activeOption === "structure"
                ? { backgroundColor: planet.buttonColor }
                : undefined
            }
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
            style={
              activeOption === "surface"
                ? { backgroundColor: planet.buttonColor, border: "none" }
                : undefined
            }
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

export default Surface;
