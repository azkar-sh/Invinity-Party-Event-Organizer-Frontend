import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPages from "./pages/LandingPages";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/NotFound";

import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* LANDING */}
        <Route element={<PrivateRoute />}>
          {/* <Route path="/order/:eventId" element={<Order />} /> */}
        </Route>

        <Route element={<PrivateRoute isAdmin={true} />}>
          <Route path="/order/:eventId" element={<Order />} />
        </Route>

        <Route path="/" element={<LandingPages />} />
        <Route path="/detail/:eventId" element={<Detail />} />

        {/* NOT FOUND */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
