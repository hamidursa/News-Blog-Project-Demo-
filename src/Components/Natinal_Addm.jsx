import React from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import TopHead from "./Layouts/TopHead";
import OtherHead from "./Layouts/OtherHead";
import { MdOutlineArrowOutward } from "react-icons/md";

import NTopImg from "../assets/Image/National/top.png";
import NBImg1 from "../assets/Image/National/img1.png";
import NBImg2 from "../assets/Image/National/img2.png";
import NBImg3 from "../assets/Image/National/img3.png";
import NBImg4 from "../assets/Image/National/img4.png";

import ATopImg from "../assets/Image/Administration/top.png";
import ABImg1 from "../assets/Image/Administration/img1.png";
import ABImg2 from "../assets/Image/Administration/img2.png";
import ABImg3 from "../assets/Image/Administration/img3.png";
import ABImg4 from "../assets/Image/Administration/img4.png";

const Natinal_Addm = () => {
   let nTopHeadNews = [
      {
         img: NTopImg,
         description:
            "First unit may begin supplying power next year as contractor given two year extension.",
         head: "Rooppur Nuclear Power Plant: Further delay in supply",
      },
   ];

   let nBottomHeadNews = [
      {
         img: NBImg1,
         head1: "",
         head2: "CA urges Japan to enhance cooperation with Bangladesh",
      },
      {
         img: NBImg2,
         head1: "Demonstration in Patiya ",
         head2: "• Road blocked for 9 hours, OC removed",
      },
      {
         img: NBImg3,
         head1: "July mass uprising’s 1st year ",
         head2: "• Students rally at Raju sculpture, protests outside Dhaka too",
      },
      {
         img: NBImg4,
         head1: "",
         head2: "Chattogram-Cox’s Bazar highway blocked for 8 hours",
      },
   ];

   let aTopHeadNews = [
      {
         img: ATopImg,
         description:
            "Anti-Corruption Commission",
         head: "Charges filed in 80pc of corruption cases",
      },
   ];

   let aBottomHeadNews = [
      {
         img: ABImg1,
         head1: "",
         head2: "CCC: Officials recruited as labourer promoted to engineer or tax collector flouting rules",
      },
      {
         img: ABImg2,
         head1: "",
         head2: "JICA’s senior VP visits Bangladesh to strengthen bilateral cooperation",
      },
      {
         img: ABImg3,
         head1: "",
         head2: "Ahmed Raihan Nizam of Chattogram passes away",
      },
      {
         img: ABImg4,
         head1: "BBS Survey ",
         head2: "• 32pc of people pay bribes to get public services, BRTA tops the list ",
      },
   ];

   return (
       <section className="mt-12 sm:px-0 px-4" id="nat_add">
          <Container>
             <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div className="p-0 sm:p-4 flex-1 w-full">
                   <div>
                       <div className="flex items-center justify-between gap-4">
                           <div className="flex flex-1 items-center gap-2">
                             <h2 className="font-rob font-medium text-2xl tracking-[0.02em] whitespace-nowrap">National</h2>
                             <div className="flex-1 h-px bg-[#919191]"></div>
                           </div>
 
                         <div className="hidden sm:flex items-center gap-1 hover:text-blue-500 transition-all duration-200">
                           <a href="#nat_add" className="font-rob font-normal text-[14px] leading-3.5 ">Read More</a>
                         <MdOutlineArrowOutward />
                         </div>
                      </div>
                      <div className="mt-6">
                         {nTopHeadNews.map((thead, index) => (
                            <TopHead key={index} tHead={thead} />
                         ))}
                      </div>
                   </div>
 
                   <div className="mt-6">
                      {nBottomHeadNews.map((bhead, index) => (
                         <OtherHead key={index} bHead={bhead} />
                      ))}
                   </div>
                </div>
 
                <div className="hidden md:block w-px self-stretch bg-[#DCDCDC]"></div>
 
                <div className="p-0 sm:p-4 flex-1 w-full">
                   <div>
                      <div className="flex items-center justify-between gap-4">
                           <div className="flex flex-1 items-center gap-2">
                             <h2 className="font-rob font-medium text-2xl tracking-[0.02em] whitespace-nowrap">Administration</h2>
                             <div className="flex-1 h-px bg-[#919191]"></div>
                           </div>
                         <div className="px-3 hidden sm:flex items-center gap-1  hover:text-blue-500 transition-all duration-200">
                           <a href="#nat_add" className="font-rob font-normal text-[14px] leading-3.5 ">Read More</a>
                         <MdOutlineArrowOutward/>
                         </div>
                      </div>
                      <div className="mt-6">
                         {aTopHeadNews.map((thead, index) => (
                            <TopHead key={index} tHead={thead} />
                         ))}
                      </div>
                   </div>
 
                   <div className="mt-6">
                      {aBottomHeadNews.map((bhead, index) => (
                         <OtherHead key={index} bHead={bhead} />
                      ))}
                   </div>
                </div>
             </div>
          </Container>
       </section>
   );
};

export default Natinal_Addm;
