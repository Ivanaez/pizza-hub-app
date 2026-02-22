import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1></h1>} />
        
      </Routes>
    </>
  );
}
export default App;
