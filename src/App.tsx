import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Routes>
                      {/* Pages WITH header/footer */}
      <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
      </Route>

                     {/* Pages WITHOUT header/footer */}
      <Route path="/login" element={<h1 style={{ color: "white" }}>Login</h1>} />
    </Routes>
  );
}

export default App;