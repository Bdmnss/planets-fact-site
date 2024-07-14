import burgerIcon from "../assets/icon-hamburger.svg";

type THeader = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<THeader> = ({ open, setOpen }) => {
  return (
    <header>
      <div
        className="flex justify-between items-center py-[1.6rem] px-[2.4rem] border-b-[1px]
        border-[gray]"
      >
        <h1 className="font-antonio text-[2.8rem] text-white font-medium tracking-[-1.05px]">
          THE PLANETS
        </h1>
        <img
          src={burgerIcon}
          alt="burger icon"
          onClick={() => setOpen(!open)}
        />
      </div>
    </header>
  );
};

export default Header;
