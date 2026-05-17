import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import Image from "./UI/Image";
import Logo from "../assets/Image/logo.png";
import ListItems from "./UI/ListItems";
import Icon from "./UI/Icon";
import { IoSearchCircleSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Category from "./UI/Category";

const Header = () => {
   let handleScrollToHome = () => {
      let home = document.getElementById("home");

      if (home) {
         home.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollToHillTrack = () => {
      let hillTrack = document.getElementById("hillTrack");

      if (hillTrack) {
         hillTrack.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollTopolitics = () => {
      let politics = document.getElementById("politics");

      if (politics) {
         politics.scrollIntoView({ behavior: "smooth" });
      }
   };

   let handleScrollToNatAdd = () => {
      let natAdd = document.getElementById("nat_add");

      if (natAdd) {
         natAdd.scrollIntoView({ behavior: "smooth" });
      }
   };

   let [moreShow, setMoreShow] = useState(false);
   let handleToggleMore = () => {
      setMoreShow(!moreShow);
   };

   let [menuShow, setMenuShow] = useState(false);
   let handleToggleMenu = () => {
      setMenuShow(!menuShow);
   };

   let [search, setSearch] = useState(false);
   let [searchText, setSearchText] = useState("");

   let handleSearchMenu = () => {
      if (searchText.trim() !== "") {
         console.log("Searching for:", searchText);
      } else {
         setSearch(!search);
      }
   };

   return (
      <header className="sticky top-0 z-50 bg-[#F2F2F2] w-full shadow-[0px_5px_5px_0px_rgba(0,0,0,0.3)]">
         <nav className=" p-4 sm:py-4 relative z-50">
            <Container>
               <Flex className="items-center justify-between relative">
                  <Category menuShow={menuShow} />
                  <div className="flex items-center gap-5">
                     <TiThMenu
                        onClick={handleToggleMenu}
                        className="block sm:hidden text-2xl cursor-pointer"
                     />

                     <Image
                        src={Logo}
                        alt="logo_img"
                        className="cursor-pointer"
                        onClick={handleScrollToHome}
                     />
                  </div>

                  <ul className="hidden sm:flex items-center gap-6 relative">
                     <ListItems
                        onClick={handleScrollToHome}
                        list={"Home"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToHillTrack}
                        list={"Hill Districts"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollTopolitics}
                        list={"Politics"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"National"}
                        className="text-[20px] hover:font-medium"
                     />
                     <ListItems
                        onClick={handleScrollToNatAdd}
                        list={"Administrative"}
                        className="text-[20px] hover:font-medium"
                     />
                     <li className="relative flex items-center gap-1 cursor-pointer list-none">
                        <span onClick={handleToggleMore} className="flex items-center gap-1 text-[20px] hover:font-medium">
                           More
                           {moreShow ? <MdOutlineKeyboardArrowUp className="text-xl" /> : <MdOutlineKeyboardArrowDown className="text-xl" />}
                        </span>
                        {moreShow && (
                           <ul className="absolute top-full right-0 mt-2 w-48 bg-[#F5F5F5] rounded-xl shadow-lg border border-[#DCDCDC] py-2 z-50 flex flex-col gap-1">
                              <ListItems
                                 list={"Education"}
                                 className="text-[18px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                              />
                              <ListItems
                                 list={"Health"}
                                 className="text-[18px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                              />
                              <ListItems
                                 list={"Court & Law"}
                                 className="text-[18px] hover:font-medium hover:bg-[#ffffff] hover:rounded-xl px-4 py-1 transition-all duration-300"
                              />
                           </ul>
                        )}
                     </li>
                  </ul>

                  <div className="flex items-center gap-6">
                     <Icon />
                     <div className="flex items-center gap-1">
                        <input
                           value={searchText}
                           onChange={(e) => setSearchText(e.target.value)}
                           type="text"
                           placeholder="Search Here..."
                           className={`font-rob transition-all duration-300 text-[16px] px-2 py-0.5 bg-white border rounded-xl
          ${search ? "opacity-100 w-28 sm:w-40" : "opacity-0 w-0 p-0 border-0"}
       `}
                        />

                        <IoSearchCircleSharp
                           onClick={handleSearchMenu}
                           className="text-[35px] rounded-full cursor-pointer"
                        />
                     </div>
                  </div>
               </Flex>
            </Container>
         </nav>
      </header>
   );
};

export default Header;
