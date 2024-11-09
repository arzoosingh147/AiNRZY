"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false)
  }

  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Ecosystem",
      url: "/ecosystem",
    },
    {
      name: "Build With Api",
      url: "/buildwithapi",
    },
    {
      name: "Open Source",
      url: "/opensource",
    },
    {
      name: "Community",
      url: "/community",
    },
    {
      name: "Contract",
      url: "/token",
    },
  ];

  return (
    <nav className="w-full px-5 py-3 flex flex-col justify-center items-center navbar">
      <div className="flex items-center justify-between w-full lg:w-[80vw]">
        {/* Logo */}
        <Link href="/" className="flex items-center text-white text-3xl gap-2 font-bold px-3">
          <Image src="/logo.png" alt="logo" height={40} width={40}></Image>
          <h1 className="text-xl font-bold">AiNrzy</h1>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center gap-5 text-white">
          {menuItems.map((menuItems, index) => (
            <Link href={menuItems.url} className="hover:bg-sky-700 cursor-pointer px-3 py-2 font-medium rounded-lg" key={index}>
              {menuItems.name}
            </Link>
          ))}
        </div>
        <Link href="/account/signup" className="hidden lg:flex bg-sky-700 hover:bg-sky-800 transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg">Account</Link>
        {/* Menu Icons */}
        <div className="flex lg:hidden">
          <button
            className="inline-flex items-center justify-center rounded-md text-white focus:outline-none"
            onClick={toggleNavbar}
            type="button"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={36}
                height={36}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={36}
                height={36}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M10 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L14 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex lg:hidden flex-col justify-center items-center self-start w-full gap-5 mt-3">
          {menuItems.map((menuItems, index) => (
            <Link
              href={menuItems.url}
              key={index}
              onClick={closeNav}
              className="text-white hover:bg-sky-700 w-full cursor-pointer px-3 py-2 font-medium rounded-lg self-start"
            >
              {menuItems.name}
            </Link>
          ))}
          <Link href="/account/login" className="bg-sky-700 hover:bg-sky-800 text-center transition ease-in-out px-5 py-2 font-medium text-xl text-slate-200 rounded-lg mb-3 w-full">Account</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;