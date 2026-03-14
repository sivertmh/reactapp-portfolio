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
      id: 3,
      title: "Karakterkalkulator",
      date: new Date("2026-01-14"),
      img: "/assets/project_thumbnails/karakterkalk.png",
      github:
        "https://github.com/sivertmh/hub-it1-prosjekter/tree/main/karaktersnitt",
    },
    {
      id: 4,
      title: "The Ministry of Nothing",
      date: new Date("2025-12-19"),
      img: "/assets/project_thumbnails/nothingministry_thumbnail.png",
      github: "https://github.com/sivertmh/flaskapp-nothingministry",
    },
    {
      id: 2,
      title: "Enkel Kalkulator",
      date: new Date("2025-12-3"),
      img: "/assets/project_thumbnails/siverts_kalkulator.png",
      github:
        "https://github.com/sivertmh/hub-it1-prosjekter/tree/main/kalkulator",
    },
    {
      id: 1,
      title: "Stemmeteller for Erikstad",
      date: new Date("2025-04-10"),
      img: "/assets/project_thumbnails/stemmeteller_erikstad_thumbnail.png",
      github: "https://github.com/sivertmh/oppdrag-stemmeteller",
    },
  ]);

  const reversedProjects = projects.reverse();

  const sortByNewest = () => {
    setProjects([...projects].sort((a, b) => b.date - a.date));
  };

  const sortByOldest = () => {
    setProjects([...projects].sort((a, b) => a.date - b.date));
  };

  // Brukes i onChange hos #sort_proj.
  // Sjekker verdi av valgt select og sorterer deretter.
  const sortBy = (sortVal) => {
    if (sortVal == "newest") {
      sortByNewest();
    } else {
      sortByOldest();
    }
  };

  return (
    <main>
      <h1>Siste Prosjekter</h1>
      <p>
        Her finner du mine siste prosjekter. Du kan lese mer om prosjektene ved
        å trykke på bildet.
      </p>
      <select
        onChange={() => sortBy(document.querySelector("#sort_proj").value)}
        name="sort_proj"
        id="sort_proj"
      >
        <option value="newest">Nyeste Først</option>
        <option value="oldest">Eldste Først</option>
      </select>
      <div className="project_wrapper">
        {/* Lager et prosjektkort per objekt i projects-listen */}
        {reversedProjects.map((proj) => {
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
