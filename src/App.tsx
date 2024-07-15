import Header from "./components/Header";
import { useState } from "react";
import BurgerMenu from "./pages/BurgerMenu";
import { Navigate, Route, Routes } from "react-router";
import Planet from "./pages/Planet";

function App() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="min-h-screen min-w-screen bg-[#070724] bg-stars bg-no-repeat bg-cover">
      <Header openBurger={openBurger} setOpenBurger={setOpenBurger} />
      <BurgerMenu openBurger={openBurger} setOpenBurger={setOpenBurger} />

      <Routes>
        <Route path="/" element={<Navigate to={"/Mercury"} />}></Route>
        <Route
          path="/:planet"
          element={<Planet openBurger={openBurger} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
