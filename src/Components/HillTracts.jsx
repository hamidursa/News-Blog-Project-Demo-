import React from "react";
import Container from "./Layouts/Container";
import TopImg from "../assets/Image/HillTracts/top_img.png";
import TopNews from "./Layouts/TopNews";
import { MdOutlineArrowOutward } from "react-icons/md";

import Hillimg1 from "../assets/Image/HillTracts/img1.png";
import Hillimg2 from "../assets/Image/HillTracts/img2.png";
import Hillimg3 from "../assets/Image/HillTracts/img3.png";
import Hillimg4 from "../assets/Image/HillTracts/img4.png";
import NewsHead from "./Layouts/NewsHead";
import { BsArrowUpRight } from "react-icons/bs";

const HillTracts = () => {
   let hillTopNews = [
      {
         img: TopImg,
         topic: " ‘Phul Biju’ celebration",
         head: "Three-day ‘Boishabi’ festival begins in Khagrachhari",
         desp: "The first day of the festival, known as ‘Phul Biju’, is celebrated by Chakma, Tripura, Marma communities by decorating their houses with flowers and also immersing them in rivers seeking blessings from the Mother Ganga.",
         time: "Today",
         line: "|",
         place: "Khagrachari",
      },
   ];

   let hillNews = [
      {
         topic: "International Day for Biological Diversity ",
         head: "• Biodiversity threatened by hill agriculture",
         pubsh_time: "3 Day ago",
         des: "|",
         place: "Khagrachari",
         img: Hillimg1,
      },
      {
         topic: "",
         head: "Tourist surge raises fresh COVID-19 concerns in Rangamati",
         pubsh_time: "6 Day ago",
         des: "|",
         place: "Khagrachari",
         img: Hillimg2,
      },
      {
         topic: "Tourism ",
         head: "• Sajek, Khagrachhari open to tourists after month-long restriction",
         pubsh_time: "2 Week ago",
         des: "|",
         place: "Rangamati",
         img: Hillimg3,
      },
      {
         topic: "",
         head: "BGB remains alert and vigilant to prevent push-ins along Khagrachari border",
         pubsh_time: "3 Week ago",
         des: "|",
         place: "Bandarban",
         img: Hillimg4,
      },
   ];

   return (
      <section className="m-0 sm:mt-6 mb-12 sm:px-0 px-4" id="hillTrack">
         <Container>
            <div className="flex items-center justify-between mb-6 gap-4">
            <div className="flex flex-1 items-center gap-2">
               <h2 className="font-rob font-medium text-[20px] sm:text-[24px] text-[#262626] whitespace-nowrap">
                  Hill Tracts
               </h2>
               <div className="flex-1 h-px bg-black"></div>
               </div>

               <div className="hidden sm:flex items-center gap-1 hover:text-blue-500 transition-all duration-200">
                                         <a href="#hillTrack" className="font-rob font-normal text-[14px] leading-3.5 ">Read More</a>
                                       <MdOutlineArrowOutward />
                                       </div>
            </div>

            <div className="flex sm:flex-row flex-col items-center gap-0 sm:gap-[30px]">
               <div>
                  {hillTopNews.map((item, index) => (
                     <TopNews key={index} topnews={item} />
                  ))}
               </div>

               <div className="flex flex-col gap-6 border-t border-[#DCDCDC] mt-6 sm:mt-0 pt-3">
                  {hillNews.map((nitem, i) => (
                     <NewsHead key={i} head={nitem} bBorder={i === hillNews.length - 1} />
                  ))}
               </div>
               <button className="flex sm:hidden mt-6 mx-auto items-center gap-1 font-rob font-normal text-[14px] text-[#1E222B] p-3 border border-[#1E222B] rounded-3xl hover:bg-[#1E222B] hover:text-textcol2 transition-all duration-300">
                              Read More <BsArrowUpRight />
                           </button>
            </div>
         </Container>
      </section>
   );
};

export default HillTracts;
