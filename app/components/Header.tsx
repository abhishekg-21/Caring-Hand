"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import DesktopMenu from "./MainMenu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-white shadow">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo-smile.png"
            alt="Smile Foundation"
            width={150}
            height={50}
            className="h-[50px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center">
          <DesktopMenu />
        </div>

        {/* Right side content */}
        <div className="flex items-center gap-4">
          {/* Support button - Visible on mobile but with reduced padding */}
          <Link
            href="/donate"
            className="rounded-md bg-[#7AC143] px-3 py-2 sm:px-5 sm:py-2 text-white font-semibold hover:bg-[#6EB13C] transition text-sm sm:text-base"
          >
            SUPPORT A CAUSE
          </Link>
          {/* Badge - Hidden on mobile */}
          <Image
            src="/images/badge-gptw.png"
            alt="Great Place to Work"
            width={50}
            height={90}
            className="h-[80px] w-auto hidden lg:block"
          />

          {/* Mobile Menu Button - Hamburger icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Renders only when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[76px] left-0 w-full bg-white shadow-md transition-transform duration-300 ease-in-out">
          <DesktopMenu
            isMobile={true}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
