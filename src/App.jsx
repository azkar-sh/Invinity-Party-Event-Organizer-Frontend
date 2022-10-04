import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPages from "./pages/LandingPages";
import Detail from "./pages/Detail";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* LANDING */}
        <Route path="/" element={<LandingPages />} />
        <Route path="/detail/:eventId" element={<Detail />} />

        {/* NOT FOUND */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
