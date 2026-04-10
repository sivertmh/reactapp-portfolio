import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Projectcard from "./components/Projectcard/Projectcard";
import Footer from "./components/Footer/Footer";

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
      id: 5,
      title: "Internet Boardgame Database",
      date: new Date("2026-03-20"),
      category: "im",
      img: "/assets/project_thumbnails/boardgamedatabase_thumbnail.png",
      github: "https://github.com/sivertmh/flaskapp-boardgamedb",
    },
    {
      id: 4,
      title: "Karakterkalkulator",
      date: new Date("2026-01-14"),
      category: "it1",
      img: "/assets/project_thumbnails/karakterkalk.png",
      github:
        "https://github.com/sivertmh/hub-it1-prosjekter/tree/main/karaktersnitt",
    },
    {
      id: 3,
      title: "The Ministry of Nothing",
      date: new Date("2025-12-19"),
      category: "im",
      img: "/assets/project_thumbnails/nothingministry_thumbnail.png",
      github: "https://github.com/sivertmh/flaskapp-nothingministry",
    },
    {
      id: 2,
      title: "Enkel Kalkulator",
      date: new Date("2025-12-3"),
      category: "it1",
      img: "/assets/project_thumbnails/siverts_kalkulator.png",
      github:
        "https://github.com/sivertmh/hub-it1-prosjekter/tree/main/kalkulator",
    },
    {
      id: 1,
      title: "Stemmeteller for Erikstad",
      date: new Date("2025-04-10"),
      category: "im",
      img: "/assets/project_thumbnails/stemmeteller_erikstad_thumbnail.png",
      github: "https://github.com/sivertmh/oppdrag-stemmeteller",
    },
  ]);

  const [filterProj, setFilterProj] = useState("ingen");

  const filtered = projects.filter((item) => {
    return filterProj === "ingen" || item.category === filterProj;
  });

  // Projeckt-sortering

  const sortByNewest = () => {
    setProjects([...projects].sort((a, b) => b.date - a.date));
  };

  const sortByOldest = () => {
    setProjects([...projects].sort((a, b) => a.date - b.date));
  };

  // Brukes i onChange hos #sort_proj.
  // Sjekker verdi av utvalgt select og sorterer deretter.
  const sortBy = (sortVal) => {
    if (sortVal === "newest") {
      sortByNewest();
    } else {
      sortByOldest();
    }
  };

  // Projekt-filtrering

  return (
    <main>
      <h1>Siste Prosjekter</h1>
      <p>
        Her finner du mine siste prosjekter. Du kan lese mer om prosjektene ved
        å trykke på bildet.
      </p>
      <div className="filter_cont">
        <b>Sorter etter</b>
        {/* Sorter prosjekter */}
        <select
          onChange={(e) => sortBy(e.target.value)}
          name="sort_proj"
          id="sort_proj"
        >
          <option value="newest">Nyeste Først</option>
          <option value="oldest">Eldste Først</option>
        </select>
      </div>
      <div className="sort_cont">
        <b>Filtrer etter</b>
        {/* Filtrer prosjekter */}
        <select
          onChange={(e) => {
            setFilterProj(e.target.value);
          }}
          name="filter_proj"
          id="filter_proj"
        >
          <option value="ingen">--- Ingen filter ---</option>
          <option value="im">IM-Fag</option>
          <option value="it1">IT 1</option>
        </select>
      </div>
      <div className="project_wrapper">
        {/* Lager et prosjektkort per objekt i projects-listen */}
        {filtered.map((proj) => {
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
      <div className="App">
        {/* Navbar */}
        <nav>
          <Navbar />
        </nav>

        <main>
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prosjekter" element={<Projects />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
