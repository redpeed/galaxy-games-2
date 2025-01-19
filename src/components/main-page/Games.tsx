"use client"

import {FaTelegram} from 'react-icons/fa6';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import React from "react";
import Image from 'next/image';

function Games() {
  return (
    <div id="games">
      {/* GAME ONE */}
      <div
        className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-one bg-cover bg-center relative z-10 bg-primary py-20 text-white px-0 md:px-2">

        <div
          className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#060c2487] to-transparent"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#060c2487] to-transparent"></div>
        <div className="absolute inset-0 bg-primary/60"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto z-10 relative ">

          <div
            className="flex justify-start items-center mb-10 md:mb-0 px-10
         md:px-2"
            data-aos="fade-right"
          >
            <Image
              className="w-32 h-12 md:w-40 md:h-16  rotate-90 -ml-16 sm:ml-0"
              src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
              alt="Indicator"
              width={128}
              height={48}
            />
            <div className="-ml-8 md:-ml-10">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                SINGLE PLAYER
              </p>
              <div>
                <Image
                  src="/desktop/hero logo-04.png"
                  className="w-72 -ml-2"
                  alt="Hero logo"
                  width={288}
                  height={42}
                />
              </div>
              <p className="text-[#c65445] font-exo text-sm 2xl:text-lg md:text-lg font-semibold">
                Raiders of the Sonic Matter
              </p>
            </div>
          </div>
          <div
            className=" flex md:flex-row flex-col items-center justify-between max-w-4xl 2xl:max-w-7xl mx-auto  md:pr-10 mt-5 md:gap-y-0 gap-y-7 text-center md:text-left px-7 md:px-0">
            <div data-aos="fade-right" className='md:w-[50%] sm:w-[80%] w-[95%] 2xl:w-[45%]'>
              <LiteYouTubeEmbed
                id={"LZ45WHLBlkc"}
                title="YouTube video player"
                iframeClass={"rounded-2xl overflow-hidden mb-2 md:mb-0 md:h-[250px] 2xl:h-[350px]"}
              />

            </div>
            <div className="max-w-56" data-aos="fade-left">
              <p className="mb-7 leading-tight text-slate-200">
                Survive in the Haunted Space, find out what happened to humanity
                and to your body
              </p>

              <a
                className="btn-primary flex items-center justify-center gap-2 px-6 mb-3 mx-auto md:mx-0 w-[200px] 2xl:w-[260px] text-center"
                href={'https://platform.hauntedspace.io/launcher '}
                target="blank"
              >
                <span>PLAY NOW</span>
                <span>|</span>
                <span className='text-xs'>BETA</span>
              </a>
              <p className="text-xs 2xl:text-base mb-7 text-slate-400">
                *Genesis Pass NFT required
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* GAME TWO */}
      <div
        className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-two bg-cover bg-center relative z-10 bg-primary py-20 text-white md:px-0">
        <div
          className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#060c2487] to-transparent"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#060c2487] to-transparent"></div>
        <div className="absolute inset-0 bg-primary/80"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto  z-10 relative ">
          <div
            className="flex justify-end items-center mb-10 md:mb-0 px-10 md:px-0"
            data-aos="fade-left"
          >
            <div className="-mr-8 md:mr-10 text-right">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                MULTI PLAYER
              </p>
              <div className="-mr-2">
                <Image src="/desktop/hero logo-04.png" className="w-72" alt="Hero logo" width={288} height={42}/>
              </div>
              <p className="text-[#015cba] ml-5 text-xs 2xl:text-base md:text-lg font-semibold font-exo">
                SURVIVAL
              </p>
            </div>
            <Image
              className="w-32 h-12 md:w-40 md:h-16  rotate-90 -mr-[70px] md:mr-0 md:-ml-20 sm:ml-0"
              src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
              alt="Indicator"
              width={128}
              height={48}
            />
          </div>
          <div
            className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left max-w-4xl 2xl:max-w-7xl  mx-auto md:pl-10 mt-5 px-7 gap-y-7 md:pr-0 md:gap-y-0">
            <div className="max-w-48" data-aos="fade-right">
              <p className="mb-7 leading-tight text-slate-200">
                Join the army of raiders, fight against other player, earn real
                money
              </p>
              <button
                className="btn-primary px-8 mb-7 2xl:w-52"
                onClick={() => window.open('https://store.epicgames.com/en-US/p/haunted-space-5525ee', '_blank')}
              >
                Coming Soon
              </button>

            </div>
            <div data-aos="fade-left" className='2xl:w-[45%]'>
              <Image
                className="rounded-xl overflow-hidden mb-2 md:mb-0 max-w-full"
                src="https://cdn.hauntedspace.io/galaxy-games/screen_Video_MultiPlayer.webp"
                alt="Multiplayer video thumbnail"
                width={446}
                height={265}
              />
            </div>
          </div>
        </div>
      </div>

      {/* GAME THREE */}
      <div
        className="2xl:min-h-[70vh] 2xl:pt-52 bg-game-three bg-cover bg-center relative z-10 bg-primary py-10 text-white px-10 md:px-2">
        <div className="absolute inset-0 bg-primary/60"></div>
        <div
          className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01011f] to-transparent"></div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#01001e] to-transparent"></div>
        <div className="max-w-6xl 2xl:max-w-[90rem] mx-auto  z-10 relative">
          <div
            className="flex justify-start items-center mb-10 md:mb-0"
            data-aos="fade-right"
          >
            <Image
              className="w-32 h-12 md:w-40 md:h-16 rotate-90 -ml-16 sm:ml-0"
              src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
              alt="Indicator"
              width={160}
              height={48}
            />
            <div className="-ml-10">
              <p className="text-sm 2xl:text-lg mb-3 text-slate-200 tracking-widest">
                MOBILE
              </p>
              <div>
                <Image
                  src="/desktop/hero logo-04.png"
                  className="w-72 -ml-2"
                  alt="Hero logo"
                  width={280}
                  height={40}
                />
              </div>
              <p className="text-violet-700 text-xs 2xl:text-base md:text-lg font-semibold font-exo">
                MINIGAME
              </p>
            </div>
          </div>
          <div
            className="flex flex-col-reverse md:flex-row items-center justify-between max-w-4xl mx-auto 2xl:max-w-7xl relative text-center md:text-left">
            <div className="max-w-48" data-aos="fade-right">
              <p className="mb-7 leading-tight text-slate-200">
                Survive as long as you can, collect rewards and earn GAGA tokens
              </p>
              <a
                className="btn-primary flex items-center justify-center gap-2 px-12 mb-3 mx-auto md:mx-0 2xl:w-52"
                href="https://t.me/HauntedSpaceMinigamebot/app?startapp=home"
                target="blank"
              >
                <span>PLAY NOW</span>
              </a>
              <p className="text-xs 2xl:text-base mb-7 text-slate-400">
                *Other platforms coming soon
              </p>
              {/* <div className="flex items-center justify-start gap-5 text-white "> */}
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} className="mx-auto md:mx-0"/>
              </a>
              {/* </div> */}
            </div>
            <div data-aos="fade-left">
              {/* <img
                className="rounded-xl overflow-hidden  relative mb-8 md:mb-0 md:-top-28"
                src="/desktop/Mobile_PNG.png"
                alt=""
              /> */}
              <video
                className="rounded-xl overflow-hidden w-[400px] h-[400px]  relative mb-8 md:mb-0 md:-top-28"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="https://cdn.hauntedspace.io/galaxy-games/minigame.webm" type="video/webm"/>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Games;
