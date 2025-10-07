
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Exercises from "./pages/Exercises";
import Plans from "./pages/Plans";
import Measurements from "./pages/Measurements";
import Equipments from "./pages/Equipments";
import MuscleGroups from "./pages/MuscleGroups";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/measurements" element={<Measurements />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/muscle-groups" element={<MuscleGroups />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
