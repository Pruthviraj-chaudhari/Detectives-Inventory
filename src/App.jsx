import Welcome from "./components/Welcome";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";
import Inventory from "./components/Inventory";

function App() {
  const detective = localStorage.getItem("email");
  const isDetective = detective ? true : false;


  return (
    <div className="flex flex-col min-h-screen bg-black w-full">
      <div className="flex-grow flex flex-wrap justify-center items-center lg:pt-6 px-1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
          {isDetective ? (
            <Route path="/inventory" element={<Inventory />} />
          ) : (
            <Route path="/inventory" element=<Navigate to="/auth" /> />
          )}

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
