"use client"
import React, {useState} from 'react';
import {FaDiscord} from 'react-icons/fa';
import {FaTelegram, FaXTwitter} from 'react-icons/fa6';
import {SiOpensea} from 'react-icons/si';
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/common/FadeinSection";
import useFooter from "@/components/sections/Footer/useFooter";
import footer from "@/components/sections/Footer/Footer";
import BlurredBoxRectangle from "@/components/common/BlurredBoxRectangle";
import {cn} from "@/lib/utils";

function FooterMobile() {


  return (
    <footer className={"relative z-10"}>

      <Link
        href={"#partners"}
        className="block mt-[200px] mb-[150px] rotate-180 size-[30px] bg-contain bg-no-repeat mx-auto"
        style={{
          backgroundImage: `url('/triangle-down.svg')`,
        }}
      />

      <div className="flex justify-center w-full z-10">

        <Link href={"/public"}>
          <Image
            src={"/galaxy-lab-logo.svg"}
            alt={"GalaxyGames Logo"}
            width={87}
            height={27}
          />
        </Link>
      </div>

      <div className="flex justify-center gap-30 mt-15">
        <a href="https://twitter.com/Galaxy_Games__" target="_blank" rel="noopener noreferrer"><FaXTwitter
          size={20}/></a>
        <a href="https://discord.gg/p6zZDvgNUW " target="_blank" rel="noopener noreferrer"><FaDiscord size={20}/></a>
        <a href="https://t.me/hauntedspace " target="_blank" rel="noopener noreferrer"><FaTelegram size={20}/></a>
      </div>

      <div className={"text-center mt-30 text-[10px]"}>
        <FadeInSection>
          STAY UP TO DATE <br/>SUBSCRIBE TO OUR NEWSLETTER
        </FadeInSection>
      </div>

      <div className="mt-2.5">
        <EmailForm/>
      </div>

      <div className={"mt-15 relative h-[1px] w-[calc(100%_-_20px)] left-[10px] bg-purple"}/>

      <div className={"py-15 text-center text-[8px]"}>
        <FadeInSection>
          2024 GALAXY LAB FZCO. All rights reserved.<br/>
          <Link href={"#"}>PRIVACY POLICY</Link> - <Link href={"#"}>TERMS AND CONDITIONS</Link>
        </FadeInSection>
      </div>
    </footer>
  );
}


function EmailForm() {
  const {
    handleFormSubmit,
    handleInputChange,
    email,
    isSubmitted,
  } = useFooter()

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex gap-[2px] items-center justify-center md:justify-end mx-5 h-50">
        <div className="relative z-10 h-full flex-grow">
          <BlurredBoxRectangle
            borderBg={"linear-gradient(0deg, rgba(255, 68, 51, 0.5) 19.74%, rgba(171, 0, 255, 0.5) 181.93%)"}
          />
          <input
            type="email"
            placeholder="E-mail address ..."
            value={email}
            onChange={handleInputChange}
            required
            className={cn(
              "absolute inset-0 outline-none m-[2px] bg-black px-2 text-[10px] placeholder-white text-white",
              "placeholder:absolute placeholder:bottom-2 placeholder:text-[10px]"
              )}
          />
        </div>

        <div className="relative z-10 h-full p-[2px]">
          <BlurredBoxRectangle borderBg={"linear-gradient(0deg, rgba(255, 68, 51, 0.5) 19.74%, rgba(171, 0, 255, 0.5) 181.93%)"}/>

          <button
            type="submit"
            disabled={isSubmitted}
            className={cn(
              'h-full text-white uppercase text-[10px] px-4 duration-200 flex items-center leading-none',
              {'opacity-30 cursor-not-allowed': isSubmitted}
              )}
            style={{
              background: "linear-gradient(0deg, rgba(255, 68, 51, 0.5) 19.74%, rgba(171, 0, 255, 0.5) 181.93%)"
            }}
          >
            {isSubmitted ? 'Email submitted!' : 'SIGN UP'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default FooterMobile;
