"use client";

import Link from "next/link";
import { useState } from "react";

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-gray-900">
                    lucky
                </Link>

                {/* Toggle for mobile mode */}
                <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                ☰
                </button>

                {/* Main Menu */}
                <ul className={`flex-col md:flex-row md:flex gap-6 text-gray-700 font-medium ${isMenuOpen? "flex mt-4 md:mt-0":"hidden md:flex"}`}>
                    <li>
                        <Link href="/#about" className="hover:text-gray-900">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/#projects" className="hover:text-gray-900">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="hover:text-gray-900">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};