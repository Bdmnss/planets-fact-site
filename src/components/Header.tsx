type THeader = {
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

import { Link } from "react-router-dom";
import data from "../data.json";

const Header: React.FC<THeader> = ({ openBurger, setOpenBurger }) => {
  return (
    <header>
      <div
        className="flex justify-between items-center py-[1.6rem] px-[2.4rem] border-b-[1px]
        border-[#38384F] sm:justify-center sm:flex-col md:flex-row md:justify-between"
      >
        <div className="flex flex-col items-center ">
          <h1
            className="font-antonio text-[2.8rem] text-white font-medium tracking-[-1.05px] 
          xl:text-[3.3rem]"
          >
            THE PLANETS
          </h1>
        </div>
        <div>
          <ul className="mini:hidden sm:block">
            <div
              className="flex items-center text-[#838391] text-[1.5rem] font-bold gap-[3.3rem] 
              mt-[3.9rem] md:mt-[0] xl:text-[1.8rem]"
            >
              {data.map((planet, index) => (
                <li key={index}>
                  <Link to={`/${planet.name}`}>{planet.name}</Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          onClick={() => setOpenBurger(!openBurger)}
          className="sm:hidden"
        >
          <g fill={`${!openBurger ? "#fff" : "#38384F"}`}>
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
