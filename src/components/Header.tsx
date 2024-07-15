type THeader = {
  openBurger: boolean;
  setOpenBurger: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<THeader> = ({ openBurger, setOpenBurger }) => {
  return (
    <header>
      <div
        className="flex justify-between items-center py-[1.6rem] px-[2.4rem] border-b-[1px]
        border-[#38384F]"
      >
        <h1 className="font-antonio text-[2.8rem] text-white font-medium tracking-[-1.05px]">
          THE PLANETS
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          onClick={() => setOpenBurger(!openBurger)}
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
