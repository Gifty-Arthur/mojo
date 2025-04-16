import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white scroll-smooth">
      <Navbar />

      <Home />
    </div>
  );
};

export default App;
