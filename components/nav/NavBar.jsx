"use client";

import { headerMenu } from "@/constants/contstants";
import Image from "next/image";
import Link from "next/link";
import Btn from "../button/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="hidden max-w-5xl mx-auto md:flex items-center justify-between py-4">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={150}
            height={31}
            alt="Oxygen Square logo"
          />
        </Link>
        {/* menu */}
        <div className="flex items-center gap-5 font-satoshi">
          {headerMenu.map((menu, id) => (
            <Link href={menu.href} className="text-[15px]" key={id}>
              {menu.menu}
            </Link>
          ))}
        </div>
        {/* cta */}
        <Btn href={"https://bit.ly/pilotmvp"} text={"Join waitlist"} />
      </nav>

      {/* mobile navigation */}
      <header>
        <nav className="max-w-5xl mx-auto px-5 md:px-0 flex items-center justify-between md:hidden py-4">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={150}
              height={31}
              alt="Oxygen Square logo"
            />
          </Link>
          <div
            className="border w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={closeMenu}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} className="text-lg" />
            ) : (
              <FontAwesomeIcon icon={faBarsStaggered} className="text-lg" />
            )}
          </div>

          {/* */}
        </nav>
        {/* menu */}
        {isOpen ? (
          <div className="flex flex-col items-end gap-5 font-satoshi shadow-lg border w-fit ml-auto py-10 px-6 rounded-lg transition-all duration-1000 delay-500">
            {headerMenu.map((menu, id) => (
              <Link
                href={menu.href}
                className="text-[15px]"
                onClick={closeMenu}
                key={id}
              >
                {menu.menu}
              </Link>
            ))}

            {/* cta */}
            <Btn href={"https://bit.ly/pilotmvp"} text={"Join waitlist"} />
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default NavBar;
