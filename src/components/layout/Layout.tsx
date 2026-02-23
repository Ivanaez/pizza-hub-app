import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";


// Main layout wrapper for all pages that use header and footer
function Layout() {
  return (
    <div className="appLayout">
       {/* Global Header */}
      <Header />

        {/* Main content of the page */}
      <main className="appMain">
        <Outlet />
      </main>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}


export default Layout;