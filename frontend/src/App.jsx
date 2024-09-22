import Buses from "./components/Buses/Buses";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Home/Services";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="text-white bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Home />} />
          <Route path="/buses" element={<Buses />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
