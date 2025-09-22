import React from "react";
import logo from "../assets/616616.png"
import { Link, NavLink } from "react-router-dom";
import PillNav from "./PillNav";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const hrefs = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

function headerLink(link, idx) {
    return (
        <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
                `relative text-lg font-semibold transition-all duration-300 px-2 py-1
              ${isActive ? "text-gold underline" : "text-gray-200 hover:text-gold"}
              group`
            }
            end={link.path === "/"}
        >
            <span className="relative z-10">{link.name}</span>
            <span
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 `}
                aria-hidden="true"
            ></span>
        </NavLink>
    )
}

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            <Link
                to="/"
                className="text-4xl uppercase font-bold font-[sixty] tracking-wider text-white drop-shadow-lg"
            >
                Nexus
            </Link>
            <PillNav
                items={hrefs}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#000000"
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#000000"
            />
            {/* <nav className="flex gap-6">
                {navLinks.map((link, idx) => (
                    headerLink(link, idx)
                ))}
            </nav> */}
        </header>
    );
}
