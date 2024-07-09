import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-[#1a1a1a] border-t border-gray-700 text-white">
      <div className="container mx-auto py-8 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <span className="text-lg font-semibold">楊光地</span>
          <p className="text-gray-500 mt-1">All rights reserved. 2024</p>
          <p className="text-gray-500">Web version: 1.1.0</p>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <Link href="https://github.com/yd-tw">
            <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Github</span>
          </Link>
          <Link href="https://www.youtube.com/@playeryd">
            <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Youtube</span>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100022136377891">
            <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/guangdiy/">
            <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Instagram</span>
          </Link>
          <Link href="https://www.threads.net/@guangdiy">
            <span className="hover:text-gray-400 transition duration-300 cursor-pointer">Threads</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
