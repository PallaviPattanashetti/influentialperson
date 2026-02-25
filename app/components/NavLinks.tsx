import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
   <nav className="flex min-h-26 h-auto w-full  items-center justify-evenly bg-[#514242] px-10 py-4">
     
      <ul className="flex flex-wrap gap-10 list-none m-0 p-0">
        <li>
          <Link href="/" className="font-['Inknut_Antiqua'] text-[32px] text-white no-underline">
           Introduction
          </Link>
        </li>
        <li>
          <Link href="/pages/philosophy" className="font-['Inknut_Antiqua'] text-[32px] text-white no-underline">
         Core-Philosophy
          </Link>
        </li>
        <li>
          <Link href="/pages/GlobalPresence" className="font-['Inknut_Antiqua'] text-[32px] text-white no-underline">
            Global-Presence
          </Link>
        </li>
        <li>
          <Link href="/pages/MyPerspective" className="font-['Inknut_Antiqua'] text-[32px] text-white no-underline">
         My-Perspective
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default NavLinks;
