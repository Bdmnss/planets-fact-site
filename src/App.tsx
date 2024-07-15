import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import Planet from "./pages/Planet";

function App() {
  const useWindowSize = () => {
    const [windowSize, setWindowsSize] = useState({
      screenWidth: 1248,
      screenHeight: 0,
    });

    useEffect(() => {
      function handleResize() {
        setWindowsSize({
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  };

  const screenWidth = useWindowSize().screenWidth;

  return (
    <div className="min-h-screen min-w-screen bg-[#070724] bg-stars bg-no-repeat bg-cover">
      <Routes>
        <Route path="/" element={<Navigate to={"/Mercury"} />} />
        <Route
          path="/:planet"
          element={<Planet screenWidth={screenWidth} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
