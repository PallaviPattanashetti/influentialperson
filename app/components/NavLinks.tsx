import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Introduction" },
  { href: "/pages/philosophy", label: "Core-Philosophy" },
  { href: "/pages/GlobalPresence", label: "Global-Presence" },
  { href: "/pages/MyPerspective", label: "My-Perspective" },
];

const NavLinks = () => {
  return (
    <nav className="sticky top-0 z-50 flex min-h-20 h-auto w-full items-center justify-center bg-[#514242]/95 backdrop-blur-md px-6 py-4 shadow-lg shadow-black/20">
      <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 list-none m-0 p-0">
        {links.map((link, i) => (
          <li
            key={link.href}
            className="anim-fade-up"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            <Link
              href={link.href}
              className="nav-link font-['Inknut_Antiqua'] text-[18px] md:text-[24px] text-white no-underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
