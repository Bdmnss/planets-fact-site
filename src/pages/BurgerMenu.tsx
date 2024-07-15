import data from "../data.json";
import arrow from "/assets/icon-chevron.svg";
import { Link } from "react-router-dom";

type TBurgerIcon = {
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerIcon: React.FC<TBurgerIcon> = ({ openBurger, setOpenBurger }) => {
  return (
    <div className={`mt-[2.4rem] ${openBurger ? "block" : "hidden"}`}>
      <ul className="flex flex-col">
        {data.map((planet, index) => (
          <li key={index}>
            <Link to={`/${planet.name}`}>
              <div
                className="flex items-center justify-between mx-[2.4rem] border-b-[1px] 
                  border-[#38384F] py-[2rem]"
                onClick={() => setOpenBurger(false)}
              >
                <div
                  className="flex items-center gap-[2.5rem] text-white text-[1.5rem] font-bold 
                  tracking-[1.36px]"
                >
                  <div
                    style={{ backgroundColor: planet.planetColor }}
                    className={`w-[2rem] h-[2rem] rounded-full`}
                  ></div>
                  {planet.name.toUpperCase()}
                </div>
                <img src={arrow} alt="arrow" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerIcon;
