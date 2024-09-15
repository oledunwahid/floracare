import NavBar from "./components/navbar/NavBar";
//import NavLinks from "./components/navbar/NavLinks";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
//import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#FFD6D6]">
       <NavBar/>
       <LandingPage/>
       <Footer/>
    </div>
  );
}

export default App;
