import "./App.css";
import AllRoutes from "./Pages/AllRoutes";
import HomePage from "./Components/HomePage/HomePage";
import Swiperrr from "./Components/HomePage/Swiperrr";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/Navbar/HeroSection";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <AllRoutes />
      <Navbar />

      <HeroSection />
      <HomePage />
      <Swiperrr />
      <Footer />
    </div>
  );
}

export default App;
