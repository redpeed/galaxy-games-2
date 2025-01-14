"use client"
import React, { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { SiOpensea } from 'react-icons/si';
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedTime, setLastSubmittedTime] = useState(0);

  // Add your event handlers here
  const handleInputChange:  React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmittedTime < 5000) {
      alert('Please wait 5 seconds before submitting again.');
      return;
    }
    setLastSubmittedTime(now);

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzRL4gTqBNZFbLhuX8iyFoX_Hn945km4dhiiclurGuIckoAK15wtwUW12e_-VpCEx9R/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail('');
        // Optionally reset the button after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Error:', err);
        alert('There was an error submitting your email.');
      });
  };

  return (
    <div className="bg-primary text-slate-200 pt-10 pb-3 px-2">
      <div data-aos="zoom-in" className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-10 gap-5 md:gap-0">
          <div className="flex-[0.3]">
            <Image src="/desktop/logo_v.png" width={160} height={50} className="w-40 mb-5" alt="logo" />
          </div>

          {/* Navigation links in the footer */}
          <div className="hidden md:block md:flex-[0.3]">
            <ul className="flex flex-col items-start justify-center uppercase text-sm 2xl:text-lg space-y-2 text-slate-400">
              <li>
                <Link href="/#home" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              {/* Removed the "Web 2 meets web 3" link */}
              <li>
                <Link href="/#games" className="hover:text-gray-300">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/#token" className="hover:text-gray-300">
                  Token
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="hover:text-gray-300">
                  Roadmap
                </Link>
              </li>
              <li className="relative pb-0">
                <div className="flex flex-col items-center">
                  <a
                    href="https://galaxy-games-studio.gitbook.io/whitepaper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WHITEPAPER
                  </a>
                </div>
              </li>
              <li className="relative pb-0">
                <div className="flex flex-col items-left">
                  <span className="line-through hover:text-gray-300 cursor-not-allowed">
                    STAKING PLATFORM
                  </span>
                  <span className="text-xs text-violet-500 uppercase font-bold whitespace-nowrap -mt-1 font-exo">
                    COMING SOON
                  </span>
                </div>
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
                <FaDiscord size={25} />
              </a>
              <a
                href="https://twitter.com/Galaxy_Games__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25} />
              </a>
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://opensea.io/collection/hsgenesispass "
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOpensea size={25} />
              </a>
            </div>

            <div className="mb-3 text-sm 2xl:text-lg tracking-[2.7px] leading-tight text-[#015cba] text-center md:text-right">
              <p>STAY UP TO DATE</p>
              <p>SUBSCRIBE TO OUR NEWSLETTER</p>
            </div>

            <div className="w-80 md:ml-auto">
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
                <FaDiscord size={25} />
              </a>
              <a
                href="https://twitter.com/Galaxy_Games__"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={25} />
              </a>
              <a
                href="https://t.me/hauntedspace "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://opensea.io/collection/hsgenesispass "
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiOpensea size={25} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 text-slate-400 tracking-[2.7px] pt-3 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs 2xl:text-base">
          <p>© 2024 GALAXY GAMES FZCO. All Rights Reserved.</p>
          <p>
            <Link
              href="/privacy-policy"
              className="text-white-500 hover:text-violet-700 transition-colors duration-200 ml-2"
            >
              PRIVACY POLICY
            </Link>{' '}
            - 
            <Link
              href="/terms-and-conditions"
              className="text-white-500 hover:text-violet-700 transition-colors duration-200 ml-2"
            >
              TERMS & CONDITIONS
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
