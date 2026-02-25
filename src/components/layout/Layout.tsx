import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";



// Main layout wrapper for all pages that use header and footer
function Layout() {
  return (
                    // This layout will be used for all pages that need header and footer
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