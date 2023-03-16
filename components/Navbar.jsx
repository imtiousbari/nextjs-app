"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo.png";
import searchIcon from "../public/Search.png";

const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-[1200px] mt-11 mb-[57px] mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex flex-row items-center justify-between h-16">
          <div className="flex items-center ">
            <Link
              href="/"
              className="font-serif text-[#292F36] font-normal text-[40px] leading-5 flex items-center "
            >
              {" "}
              
              <Image className="py-2 " src={Logo} alt="My Image" width={30} height={30} />
              <span className="ml-2.5 font-serif">Interno</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-9">
              <Link
                href="/"
                className="text-[#292F36] hover:text-gray-400  rounded-md text-xl leading-5 font-jost font-normal "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Pages
              </Link>
              <Link
                href="/contact"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Project
              </Link>
              <Link
                href="/contact"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="text-[#292F36] hover:text-gray-400 rounded-md text-xl leading-5 font-jost font-normal"
              >
                Services
              </Link>
             
              {/* <button className="">
                <Image className="" src={searchIcon} alt="My Image" width={21} height={21} />
               </button > */}
               <div class="search-container">
                <form action="/search" method="get">
                  <input class="search expandright"  id="searchright" type="search" name="q" placeholder="Search"
                  />
                  <label class="button searchbutton" for="searchright"><Image className="" src={searchIcon} alt="My Image" width={21} height={21} /></label>
                </form>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
