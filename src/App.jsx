import React from "react";
import Navbar from "./pages/Navbar";
import Full from "./pages/full";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen text-white scroll-smooth">
      <Navbar />
      <Full />
    </div>
  );
};

export default App;
