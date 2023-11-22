import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";

// Paginas auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";

// Paginas admin
import Home from "./pages/admin/Home";
import Settings from "./pages/admin/Settings";
import Overview from "./pages/admin/Overview";
import Security from "./pages/admin/Security";
import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="registro" element={<Register />} />
        <Route path="olvide-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAuth />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Overview" element={<Overview />} />
          <Route path="Security" element={<Security />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
