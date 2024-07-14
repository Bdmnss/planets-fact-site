import Header from "./components/Header";
import { useState } from "react";
import BurgerMenu from "./pages/BurgerMenu";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-screen bg-[#070724] bg-stars bg-no-repeat bg-cover">
      <Header open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
