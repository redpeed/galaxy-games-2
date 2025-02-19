"use client"
import React from 'react';
import {FaDiscord} from 'react-icons/fa';
import {FaTelegram, FaXTwitter} from 'react-icons/fa6';
import {SiOpensea} from 'react-icons/si';
import Link from "next/link";
import Image from "next/image";
import FadeInSection from "@/components/common/FadeinSection";
import useFooter from "@/components/sections/Footer/useFooter";

function Footer() {
  const {
    handleFormSubmit,
    handleInputChange,
    email,
    isSubmitted,
  } = useFooter()

  return (
    <div className="w-full relative text-slate-200 mt-[200px] md:mt-0 md:pt-10 pb-3 px-2 [&_a]:relative [&_a]:z-50">
      <div className="absolute inset-0 bg-[#01001E] -z-10 mix-blend-lighten"/>

      <div className="max-w-5xl mx-auto px-5 xl:px-0">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-5 md:gap-0">
          <div className="flex-[0.3]">
            <Image src="/galaxy-lab-logo.svg" width={160} height={50} className="w-40 mb-5" alt="logo"/>
          </div>

          {/* Navigation links in the footer */}
          <div className="hidden md:block md:flex-[0.3]">
            <ul
              className="flex flex-col items-start justify-center uppercase text-sm 2xl:text-lg space-y-2 text-slate-400">
              <li>
                <FadeInSection>
                  <Link href="#home" className="hover:text-gray-300">
                    Home
                  </Link>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection>
                  <Link href="#ai" className="hover:text-gray-300">
                    AI
                  </Link>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection>
                  <Link href="#avatar" className="hover:text-gray-300">
                    Avatar
                  </Link>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection>
                  <Link href="#gaga-token" className="hover:text-gray-300">
                    Token
                  </Link>
                </FadeInSection>
              </li>

            </ul>
          </div>

          {/* Socials, newsletter, etc. */}
          <div className="flex-[0.4] text-right">
            <div className="hidden md:flex items-center justify-center md:justify-end gap-5 mb-8">
              <a
                href="https://discord.gg/p6zZDvgNUW "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={25}/>
              </a>
              <a
                href="https://x.com/Galaxy_Lab_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25}/>
              </a>
              <a
                href="https://t.me/galaxylabofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25}/>
              </a>
            </div>

            <div
              className="mb-3 text-sm 2xl:text-lg tracking-[2.7px] leading-tight text-[#015cba] text-center md:text-right">
              <FadeInSection>
                <p>STAY UP TO DATE</p>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
              </FadeInSection>
            </div>

            <div className="w-80 md:ml-auto relative z-50">
              <form onSubmit={handleFormSubmit}>
                <div className="flex items-center justify-center md:justify-end">
                  <input
                    type="email"
                    placeholder="E-mail address"
                    value={email}
                    onChange={handleInputChange}
                    required
                    className="pl-4 py-2 w-[70%] border text-sm focus:outline-none border-[#015cba] rounded-l-full bg-primary text-slate-400 placeholder-slate-300"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`h-10 ${
                      isSubmitted ? 'w-[60%]' : 'w-[30%]'
                    } text-white uppercase text-sm py-2 px-4 rounded-r-full duration-200 border ${
                      isSubmitted
                        ? 'bg-green-500 border-green-600 cursor-not-allowed'
                        : 'bg-gradient-to-b from-purple-600 to-indigo-600 hover:bg-gradient-to-t hover:to-purple-800 hover:from-indigo-800 border-purple-600'
                    }`}
                  >
                    {isSubmitted ? 'Email submitted!' : 'SIGN UP'}
                  </button>
                </div>
              </form>
            </div>

            <div className="flex md:hidden items-center justify-center md:justify-end gap-5 mt-8">
              <a
                href="https://discord.gg/p6zZDvgNUW "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={25}/>
              </a>
              <a
                href="https://twitter.com/Galaxy_Games__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25}/>
              </a>
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25}/>
              </a>
              <a
                href="https://opensea.io/collection/hsgenesispass "
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOpensea size={25}/>
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t border-slate-700 text-slate-400 tracking-[2.7px] pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs 2xl:text-base">
          <FadeInSection>
            <p>© 2024 GALAXY GAMES FZCO. All Rights Reserved.</p>
          </FadeInSection>
          <div className={"flex text-[12px]"}>
            <Link
              href="/privacy-policy"
              className="text-white-500 hover:text-violet-700 transition-colors duration-200 ml-2"
            >
              <FadeInSection>
                PRIVACY POLICY
              </FadeInSection>
            </Link>{' '}
            -
            <Link
              href="/terms-and-conditions"
              className="text-white-500 hover:text-violet-700 transition-colors duration-200 ml-2"
            >
              <FadeInSection>
                TERMS & CONDITIONS
              </FadeInSection>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
