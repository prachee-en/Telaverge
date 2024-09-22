import Buses from "./components/Buses/Buses";
import FlightsTickets from "./components/FlightTickets/FlightsTickets";
import BusTickets from "./components/BusTickets/BusTickets";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
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
          <Route path="/flights/tickets" element={<FlightsTickets />} />
          <Route path="/buses" element={<Buses />} />
          <Route path="/buses/tickets" element={<BusTickets />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
