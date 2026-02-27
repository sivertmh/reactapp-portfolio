import { useState } from "react";
import style from "./Navbar.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={'/assets/smh.svg'} className={style.logo} alt="Logo for Sivert M. Hansen" />
            <ul>
                <li>< Link className={style.navlink} to="/">Hjem</Link></li>
                <li><Link className={style.navlink} to="/projects">Prosjekter</Link></li>
            </ul>
        </div>
    );
}

export default Navbar