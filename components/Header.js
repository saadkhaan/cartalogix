import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
      <header className="absolute w-full px-4 py-8 z-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="logo w-36 sm:w-auto">
              <img src="../logo.svg" alt="cartalogix logo" />
            </div>
            <nav>
              <ul className="sm:flex gap-x-12 hidden">
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
        </div>
      </header>
    );
}
