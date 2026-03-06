import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projectcard from "./components/Projectcard/Projectcard";

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
      title: "Enkel Kalkulator",
      img: "/assets/project_thumbnails/siverts_kalkulator.png",
      github:
        "https://github.com/sivertmh/project-hub-it1/tree/main/kalkulator",
    },
    {
      id: 2,
      title: "Karakterkalkulator",
      img: "/assets/project_thumbnails/karakterkalk.png",
      github:
        "https://github.com/sivertmh/project-hub-it1/tree/main/karaktersnitt",
    },
  ]);

  return (
    <main>
      <h1>Siste Prosjekter</h1>
      <p>Du kan lese mer om prosjektene ved å trykke på bildet.</p>
      <div className="project_wrapper">
        {projects.map((proj) => {
          return (
            <a href={proj.github} target="blank_">
              <Projectcard key={proj.id} title={proj.title} img={proj.img} />
            </a>
          );
        })}
      </div>
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
