import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Routes>
                      {/* Pages WITH header/footer */}
      <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
      </Route>

                     {/* Pages WITHOUT header/footer */}
      <Route path="/login" element={<LoginPage />} />

    </Routes>
  );
}

export default App;