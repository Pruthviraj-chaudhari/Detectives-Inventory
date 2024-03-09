import Welcome from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import Inventory from "./pages/InventoryPage";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-screen bg-black w-full">
      <div className="flex-grow flex flex-wrap justify-center items-center lg:pt-6 px-1">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/auth" element={<AuthPage />} />
          {token !== null ? (
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
