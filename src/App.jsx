import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPages from "./pages/LandingPages";
import Detail from "./pages/Detail";
import Order from "./pages/Order";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Notfound from "./pages/NotFound";
import DetailUser from "./pages/DetailUser";
import EditUser from "./pages/EditUser";
import ChangePassword from "./pages/ChangePassword";

import PublicRoute from "./utils/routes/PublicRoute";
import PrivateRoute from "./utils/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH */}
        {/* Public Route */}
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* LANDING */}
        {/* Public Route */}
        <Route path="/" element={<LandingPages />} />
        <Route path="/detail/:eventId" element={<Detail />} />

        {/* Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/order/:eventId" element={<Order />} />
          <Route path="/user/:userId" element={<DetailUser />} />
          <Route path="/user/edit/:userId" element={<EditUser />} />
          <Route
            path="/user/changepassword/:userId"
            element={<ChangePassword />}
          />
        </Route>

        {/* Admin Route */}
        <Route element={<PrivateRoute isAdmin={true} />}>
          {/* <Route path="/order/:eventId" element={<Order />} /> */}
        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
