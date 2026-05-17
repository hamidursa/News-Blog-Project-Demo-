import React from "react";
import Container from "./Layouts/Container";
import Flex from "./Layouts/Flex";
import FootList from "./Layouts/FootList";
import FootLogo from "../assets/Image/footlogo.png";

import { TbBrandFacebook } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
   return (
      <footer className="bg-[#181B22] pt-12 sm:px-0 px-6">
         <Container>
            <Flex className="flex-col sm:flex-row items-start justify-between mb-12">
               <div className=" text-textcol2">
                  <h2 className="mb-6 font-rob text-2xl font-semibold leading-6">
                     About
                  </h2>
                  <ul className="flex flex-col gap-4">
                     <FootList list={"About Us"} />
                     <FootList list={"Work for us"} />
                     <FootList list={"Privacy Policy"} />
                     <FootList list={"Cookie Policy"} />
                     <FootList list={"Cookie Preferences"} />
                     <FootList list={"Terms & Conditions"} />
                  </ul>
               </div>
               <div className=" text-textcol2">
                  <h2 className="mb-6 font-rob text-2xl font-semibold leading-6 sm:mt-0 mt-12">
                     Media
                  </h2>
                  <ul className="flex flex-col gap-4">
                     <FootList list={"Podcasts"} />
                     <FootList list={"Video"} />
                     <FootList list={"Photos"} />
                  </ul>
               </div>
               <div className=" text-textcol2">
                  <h2 className="mb-6 font-rob text-2xl font-semibold leading-6 sm:mt-0 mt-12">
                     Connect
                  </h2>
                  <ul className="flex flex-col gap-4">
                     <FootList list={"Contact Us"} />
                     <FootList list={"Advertise with us"} />
                     <FootList list={"Newsletter"} />
                  </ul>
               </div>

               <div className="flex flex-col items-center sm:mt-0 mt-12 mx-auto sm:mx-0">
                  <img src={FootLogo} alt="Foot_img" />
                  <div className="w-full max-w-[350px] sm:w-[302px] mt-6 border border-textcol2 rounded-2xl flex flex-col items-center">
                     <h2 className="mt-3 font-rob font-normal text-[20px] leading-6 text-white">
                        Follow us
                     </h2>
                     <div className="mt-7 text-textcol2 flex items-center sm:gap-4 gap-6 mb-4">
                        <TbBrandFacebook className="text-[30px] cursor-pointer" />
                        <FaInstagram className="text-[30px] cursor-pointer" />
                        <BsTwitterX className="text-[30px] cursor-pointer" />
                        <AiOutlineYoutube className="text-[30px] cursor-pointer" />
                        <IoLogoTiktok className="text-[30px] cursor-pointer" />
                     </div>
                  </div>
               </div>
            </Flex>
            <div className="font-rob font-normal text-center text-[16px] text-[#666666] pb-2"> &copy; Copyright 2025 NewsInsight. All rights reserved.</div>
         </Container>
      </footer>
   );
};

export default Footer;
