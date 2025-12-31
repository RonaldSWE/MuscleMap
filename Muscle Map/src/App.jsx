import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Training from "./Pages/Training.jsx";
import Meals from "./Pages/Meals.jsx";
import Settings from "./Pages/Settings.jsx";
import Abs from "./Exercises/Abs.jsx";
import Arms from "./Exercises/Arms.jsx";
import Chest from "./Exercises/Chest.jsx";
import Legs from "./Exercises/Legs.jsx";
import ShoulderAndBack from "./Exercises/ShoulderAndBack.jsx";

const App = () => {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Training />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/training/abs" element={<Abs />} />
          <Route path="/training/arms" element={<Arms />} />
          <Route path="/training/chest" element={<Chest />} />
          <Route path="/training/legs" element={<Legs />} />
          <Route
            path="/training/shoulder-and-back"
            element={<ShoulderAndBack />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
