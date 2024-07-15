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
  };
  buttonColor: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

interface OverviewProps {
  planet: PlanetData;
}

const Overview: React.FC<OverviewProps> = ({ planet }) => {
  return (
    <div className="flex flex-col justify-center items-center px-[2.4rem]">
      <img
        src={planet.images.planet}
        alt="planet image"
        style={{
          width: planet.planetSize.mobile.width,
          height: planet.planetSize.mobile.height,
        }}
        className="mb-[9.8rem] mt-[9.5rem]"
      />
      <h2 className="text-[4rem] text-white font-antonio font-medium mb-[1.6rem]">
        {planet.name.toUpperCase()}
      </h2>
      <p className="text-center text-[1.3rem] text-[#838391] leading-[2.2rem] mb-[3.2rem]">
        {planet.overview.content}
      </p>
      <p className="flex items-center text-[#838391] text-[1.2rem] gap-2 mb-[2.8rem]">
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
  );
};

export default Overview;
