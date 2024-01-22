"use client";

import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareSnapchat,
} from "react-icons/fa6";
import { TbBracketsAngle } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-gray-900 mt-10">
      <div className="main-container">
        <div className="w-full text-center text-sm text-white flex flex-col gap-5 md:flex-row justify-center items-center px-4">
          <Image
            src={"/favicon.ico"}
            width={30}
            height={30}
            alt="accepted payments"
          />
          <span>All Rights Reserved codeTest.com</span>
          <div className="flex gap-5 text-white flex-1 justify-end text-2xl">
            <FaSquareXTwitter />
            <FaFacebookSquare />
            <FaSquareInstagram />
            <FaSquareSnapchat />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
