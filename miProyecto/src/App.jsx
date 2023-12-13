import { BrowserRouter, Routes, Route } from "react-router-dom";

// Context
import { AuthProvider } from "./context/AuthContext";

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
import Activity from "./pages/admin/Activity";
import Billing from "./pages/admin/Billing";

import TasksPage from "./pages/auth/TasksPage";
import TaskFormPage from "./pages/auth/TaskFormPage";

import Chat from "./pages/admin/Chat";
import Error404 from "./pages/Error404";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="registro" element={<Register />} />

            <Route path="olvide-password" element={<ForgetPassword />} />
            <Route path="/" element={<LayoutAuth />}>
              <Route path="home" element={<Home />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<LayoutAdmin />}>
                <Route index element={<Home />} />
                <Route path="Settings" element={<Settings />} />
                <Route path="Overview" element={<Overview />} />
                <Route path="Security" element={<Security />} />
                <Route path="Activity" element={<Activity />} />
                <Route path="Billing" element={<Billing />} />
                <Route path="tasks" element={<TasksPage />} />
                <Route path="add-task" element={<TaskFormPage />} />
                <Route path="/task/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<h1>profile</h1>} />
                <Route path="chat" element={<Chat />} />
              </Route>
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
