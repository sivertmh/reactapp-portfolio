import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Projectcard from "./components/Projectcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Hjem</h1>
    </main>
  );
}

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Enkel Kalkulator med HTML, CSS og JS",
      img: "/assets/project_thumbnails/siverts_kalkulator.png",
    },
    {
      id: 2,
      title: "Karakterkalkulator",
      img: "/assets/project_thumbnails/karakterkalk.png"
    }
  ]);

  return (
    <main>
      <h1>Prosjekter</h1>
      {projects.map((proj) => {
        return <Projectcard key={proj.id} title={proj.title} img={proj.img} />;
      })}
    </main>
  );
}

function Contact() {
  return (
    <main>
      <h1>Kontakt Meg</h1>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <div className="App">
        <nav>
          <Navbar />
        </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prosjekter" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
