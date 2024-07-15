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
  };
  geologySize: {
    mobile: {
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
}

const Surface: React.FC<SurfaceProps> = ({ planet }) => {
  return (
    <div className="flex flex-col justify-center items-center px-[2.4rem] relative">
      <img
        src={planet.images.planet}
        alt="planet image"
        style={{
          width: planet.planetSize.mobile.width,
          height: planet.planetSize.mobile.height,
        }}
        className="mb-[9.8rem] mt-[9.5rem]"
      />
      <img
        src={planet.images.geology}
        alt="geology image"
        style={{
          width: planet.geologySize.mobile.width,
          height: planet.geologySize.mobile.height,
        }}
        className="absolute top-[20rem]"
      />
      <h2 className="text-[4rem] text-white font-antonio font-medium mb-[1.6rem]">
        {planet.name.toUpperCase()}
      </h2>
      <p className="text-center text-[1.3rem] text-[#838391] leading-[2.2rem] mb-[3.2rem]">
        {planet.geology.content}
      </p>
      <p className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem]">
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
  );
};

export default Surface;
