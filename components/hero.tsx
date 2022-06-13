import React, { useState } from "react";
import { DecoratorBlob1 } from "./svg/svg1";
import Marquee from "react-fast-marquee";
// import logo from "../asset/images/logo.png";
import { PlayIcon, SearchIcon } from "@heroicons/react/outline";
import SearchBar from "./SearchBar";

const Hero = ({
  heading = "L'ECLOSION, LE JOURNAL DE TOUT LE MONDE",
  description = "Desmund TUTU: Si tu es neutre en situation d'injustice, ce que tu as choisi le camp de l'oppreseur",
  watchVideoButtonText = "Voir la nouvelle vidéo",
  imageSrc = "https://firebasestorage.googleapis.com/v0/b/eclosion-ne.appspot.com/o/logo.png?alt=media&token=703fe975-52ef-4d55-8db4-afe0dd17b0f7",
}) => {
  return (
    <div
      className="w-full bg-gradient-to-r from-pink-50 via-red-200 to-red-600"
      // style={{ background: "linear-gradient( #ec008c, #fff)", width: "100%" }}
    >
      <div className="flex flex-col flex-col-reverse max-w-screen-xl p-5 py-0 mx-auto lg:flex-row md:items-center md:py-20">
        <div className="relative flex-shrink-0 text-center lg:w-6/12 lg:pr-12 lg:text-left">
          <div className="max-w-3xl text-3xl font-black leading-snug poppins md:text-5xl">
            {heading}
          </div>
          <i className="max-w-lg mx-auto my-5 text-sm font-medium text-gray-600 lg:my-8 lg:text-base lg:mx-0">
            <span className="ml-1 text-lg">&#10077;</span> {description}
          </i>
          <a
            href=""
            className="flex flex-col items-center justify-center mt-5 mb-5 sm:flex-row lg:justify-start"
          >
            <PlayIcon className="w-10" />
            <span className="playText">{watchVideoButtonText}</span>
          </a>
        </div>
        <div className="relative flex flex-col justify-center mt-3 flex-start lg:mt-0">
          <div className="relative flex items-center justify-center max-w-3xl md:justify-end lg:max-w-none">
            <img src={imageSrc} alt="Hero" />
          </div>
        </div>
      </div>
      <div
        className="p-5 text-white"
        style={{
          backgroundColor: "#990000",
          backgroundImage: "linear-gradient(147deg, #990000 0%, #ff0000 74%)",
        }}
      >
        <div className="w-full m-auto max-w-7xl">
          <div className="flex justify-between">
            <div className="flex items-center font-light">JOURNAL</div>

            <div className="flex items-center h-8 px-3 mr-3 lg:w-1/2 xs:w-full ">
              <SearchBar />
              {/* <label htmlFor="search" className="inline-block red-">
                  <SearchIcon className="inline-block h-4 ml-2 cursor-pointer text-gray-50" />
                </label> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white ">
        <div className="w-full m-auto overflow-hidden text-gray-900 max-w-7xl">
          <div className="flex justify-between">
            <div className="flex items-center justify-center py-3 pr-5 bg-gray-200 w-80">
              <div className="p-1 ml-3 border-2 border-red-500 rounded-full ">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-5 h-5 bg-red-400 rounded-full opacity-75 -top-1 -left-1 animate-ping"></span>
                  <span className="relative inline-flex w-3 h-3 bg-red-500 rounded-full"></span>
                </span>
              </div>
              <div className="ml-1 font-bold">URGENT</div>
            </div>
            <div className="p-3">
              <Marquee speed={50}>
                <span className="inline-block mr-10">
                  Pour la troisième fois en vingt ans, l’extrême droite se
                  retrouve au second tour de l’élection présidentielle en
                  France.
                </span>
                <span className="inline-block mr-10">
                  Comment cette montée en puissance est-elle perçue en Afrique
                  francophone ?
                </span>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
