"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "generator", path: "/generator" },
  { name: "reader", path: "/reader" },
];

const MobileNav = () => {
  const pathName = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => path === pathName || path === `${pathName}/`;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex justify-center items-center"
        aria-label="Open navigation menu"
      >
        <CiMenuFries className="text-[32px] text-accent " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <div className="text-4xl font-semibold">QRify</div>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 capitalize">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={handleLinkClick}
              className={`${
                isActive(link.path)
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-xl hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
