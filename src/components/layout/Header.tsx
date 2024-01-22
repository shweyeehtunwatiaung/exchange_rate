"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Container, Grid } from "@radix-ui/themes";

const Header: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <Grid columns="1" className="border-b border-1 flex items-center">
      <Container className="maxMd:max-w-full maxMd:w-full maxMd:px-4">
        <nav className="py-3">
          <div className="main-container flex justify-between items-center relative">
            <Link href={"/"}>
              <div className="flex gap-1 items-center text-xl font-medium text-black">
                <h1>Exchange Converter</h1>
              </div>
            </Link>

            <ul className="maxMd:hidden flex justify-end gap-10 max-md:hidden cursor-pointer">
              <Link href="/">
                <li>Currency Listing</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <Link href="/contact">
                <li>Contact</li>
              </Link>
            </ul>

            <div className="md:hidden flex gap-5 text-xl [&>*]:cursor-pointer">
              <div className="md:hidden" onClick={mobileMenuHandler}>
                {openMobileMenu ? <MdClose /> : <FiMenu />}
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          {openMobileMenu && (
            <div className="md:hidden">
              <div className="absolute right-5 w-48 bg-gray-700 py-5 shadow-md rounded-md p-4 text-white text-center z-[99999]">
                <ul className="flex flex-col gap-5">
                  <Link href="/">
                    <li>Currency Listing</li>
                  </Link>
                  <Link href="/about">
                    <li>About Us</li>
                  </Link>
                  <Link href="/contact">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </Grid>
  );
};

export default Header;
