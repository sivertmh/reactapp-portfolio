import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Hjem</h1>;
}

function Projects() {
  return <h1>Prosjekter</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <div className="App">
        <Navbar />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
