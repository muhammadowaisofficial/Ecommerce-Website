import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[30px] py-2 w-full">
      <div>
        <Image src="/Logo.webp" alt="Panverse" width={120} height={120} />
      </div>
      <div>
        <ul className="flex items-center space-x-[30px] text-lg font-semibold">
          <li className="hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="#">Explore</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="#">About</Link>
          </li>
          <li className="hover:text-blue-600">
            <Link href="#">Contact</Link>
          </li>
        <button className="bg-blue-600 px-6 py-2 text-white rounded-xl text-xl font-semibold hover:bg-blue-900">
          Apply
        </button>
          <div></div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
