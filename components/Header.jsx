"use client";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 xl:py-8 text-white/80">
      <div className="container flex justify-between items-center mx-auto">
        <h1 className="text-4xl font-bold font-kantumruy text-white">
          <Link href="/">QRify <span className="text-accent">.</span></Link>
          </h1>
        <div className="hidden xl:flex xl:p-2">
          <DesktopNav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
