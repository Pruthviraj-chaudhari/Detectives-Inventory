import CompleteProfile from "./components/CompleteProfile";
import Welcome from "./components/Welcome";
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import FullProfile from "./components/FullProfile";
import { useContext, useEffect } from "react";
import AuthPage from "./components/AuthPage";
import {AppContext} from "./contexts/AppContext";
import MyProfile from "./components/MyProfile";
import { Navbar } from "./components/Navbar";
import Inventory from "./components/Inventory"


function App() {
  
  const { profiles, isLogin, getProfiles } = useContext(AppContext);
  const detective = localStorage.getItem("email");
  const isDetective = detective ? true : false;
  
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex flex-wrap justify-center items-start lg:pt-6 px-1">
       

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/profiles/*" element={<Cards />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/myprofile" element={<MyProfile />} />

         { isDetective? (
          <Route path="/inventory" element={<Inventory />} />):(
            <Navigate to="/auth" />
          )}

          {isLogin ? (
            <Route path="/completeprofile" element={<CompleteProfile />} />
          ) : (
            <Route path="/completeprofile" element={<Navigate to="/auth" />} />
          )}

          {profiles.map((member) => (
            <Route
              key={member._id}
              path={`/fullprofile/${member._id}`}
              element={<FullProfile data={member} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
