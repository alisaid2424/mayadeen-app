"use client";

import Image from "next/image";
import Link from "next/link";
import routes from "../../utils/routes";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const links = [
    { title: "اتصل بنا", href: routes.contact },
    { title: "البث المباشر", href: routes.liveBroadcast },
    { title: "المسابقات", href: routes.contests },
    { title: "الخدمات", href: routes.services },
    { title: "عن ميادين", href: routes.about },
  ];

  const renderLinks = () =>
    links.map((link) => (
      <li key={link.href}>
        <Link
          onClick={() => setToggle(false)}
          href={link.href}
          className="text-base block"
        >
          {link.title === "المسابقات" ? (
            <span>
              <span className="text-yellow-400">+</span> المسابقات
            </span>
          ) : (
            link.title
          )}
        </Link>
      </li>
    ));

  return (
    <>
      {/*Middle Content - Links & Search - Only for LG and above*/}
      <div className="hidden lg:flex items-center gap-10 flex-1 justify-between">
        <nav className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
          <div className="search relative">
            <input
              type="search"
              name="search"
              className="text-lg bg-transparent rounded-full py-2 px-3 w-[90px] focus:w-[160px] focus:outline-none focus:placeholder:opacity-0 transition-all duration-300"
              placeholder="...بحث"
            />
            <Image
              src="/icons/search.svg"
              alt="search-icon"
              width={20}
              height={20}
              className="absolute top-1/2 -translate-y-1/2 right-0"
            />
          </div>

          <ul className="navLinks z-50 flex items-start md:items-center flex-col md:flex-row gap-3 lg:gap-10 md:ms-auto md:me-10">
            {renderLinks()}
          </ul>
        </nav>
      </div>

      {/* Menu button + mobile menu*/}
      <div className="ms-7 w-full lg:w-auto lg:hidden">
        <button
          onClick={() => setToggle(!toggle)}
          className="p-2 hover:bg-white/20 rounded transition "
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                toggle
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              }
            />
          </svg>
        </button>

        {toggle && (
          <div className="absolute top-full left-0 w-full bg-[#007057] px-5 py-6 z-50">
            <ul className="flex flex-col gap-4">{renderLinks()}</ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
