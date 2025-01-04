"use client";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 xl:py-5 mx-auto max-w-[1200px] text-black">
      <div className="container flex justify-between items-center mx-auto">
        <h1 className="text-3xl font-bold"><Link href="/">QRify</Link></h1>
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
