import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import CreateAccountPage from "./pages/createAccount/CreateAccountPage";

function App() {
  return (
    <Routes>
                      {/* Pages WITH header/footer */}
      <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
      </Route>

                     {/* Pages WITHOUT header/footer */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
    </Routes>
  );
}

export default App;