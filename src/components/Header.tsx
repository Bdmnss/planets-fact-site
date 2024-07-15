type THeader = {
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
  screenWidth: number;
};

import { Link } from "react-router-dom";
import data from "../data.json";
import { useState } from "react";

const Header: React.FC<THeader> = ({
  openBurger,
  setOpenBurger,
  screenWidth,
}) => {
  const [active, setActive] = useState("Mercury");

  console.log(active);

  return (
    <header>
      <div
        className="flex justify-between items-center py-[1.6rem] px-[2.4rem] border-b-[1px]
        border-[#38384F] sm:justify-center sm:flex-col lg:flex-row lg:justify-between
        lg:items-start lg:py-[0]"
      >
        <div className="flex flex-col items-center ">
          <h1
            className="font-antonio text-[2.8rem] text-white font-medium tracking-[-1.05px] 
          xl:text-[3.3rem] lg:my-[1.6rem]"
          >
            THE PLANETS
          </h1>
        </div>
        <div>
          <ul className="mini:hidden sm:block">
            <div
              className="flex items-center text-[#838391] text-[1.5rem] font-bold gap-[3.3rem] 
              mt-[3.9rem] lg:mt-[0] xl:text-[1.8rem] "
            >
              {data.map((planet, index) => (
                <li
                  style={
                    screenWidth > 1024
                      ? {
                          borderTop:
                            active === planet.name
                              ? `4px solid ${planet.buttonColor}`
                              : "",
                          marginBottom: active === planet.name ? `4px` : "",
                        }
                      : undefined
                  }
                  key={index}
                  className="lg:pt-[2.6rem]"
                  onClick={() => setActive(planet.name)}
                >
                  <Link to={`/${planet.name}`} className="lg:py-[3rem]">
                    {planet.name}
                  </Link>
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
