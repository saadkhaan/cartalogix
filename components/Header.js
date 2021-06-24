import React, { useState } from "react";
import Link from 'next/link'

export default function Header() {
  
  const [menu, setMenu] = useState(false);
  console.log(menu);

    return (
      <header className="absolute w-full px-4 py-8 z-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo w-36 sm:w-auto">
              <img src="../logo.svg" alt="cartalogix logo" />
            </div>
            <div className="hamburger sm:hidden" onClick={() => setMenu(!menu)}>
              {menu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </div>
            <nav className="hidden sm:flex">
              <ul className="sm:flex gap-x-12">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Products</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={menu ? "block bg-[#F4F9FF] py-4 mt-2" : "hidden"}>
            <nav>
              <ul>
                <li className="hover:bg-gray-200 px-2 py-2">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-2">
                  <Link href="/">About</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-2">
                  <Link href="/">Products</Link>
                </li>
                <li className="hover:bg-gray-200 px-2 py-2">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}
