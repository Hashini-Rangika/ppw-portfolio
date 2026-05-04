import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReflectiveJournal from "./pages/ReflectiveJournal";
import CareerPlan from "./pages/CareerPlan";
import CV from "./pages/CV";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/journal' element={<ReflectiveJournal />} />
        <Route path='/career' element={<CareerPlan />} />
        <Route path='/cv' element={<CV />} />
        <Route path='/certificates' element={<Certificates />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
