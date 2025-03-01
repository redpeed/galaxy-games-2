import Image from "next/image";

function Tokens() {
  return (
    <div
      id="token"
      className="relative 2xl:min-h-[70vh] 2xl:-mt-16  bg-cover text-white bg-primary z-10 flex items-center justify-center  "
    >
      <div className="absolute inset-0 bg-primary/10"></div>

      <div className="flex flex-col items-center justify-center">
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center"
        >
          <Image
            className="w-40 h-16 bg-cover mb-10"
            src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
            alt="Token Icon"
            width={160}
            height={64}
          />
          <div className="text-center uppercase -mt-14 mb-16 space-y-2">
            <div className="text-lg tracking-[2.7px] text-slate-200">
              Discover
            </div>
            <h3 className="text-4xl">GALAXY LAB Tokens</h3>
          </div>
        </div>
        <div
          className="text-center text-slate-100 shadow-lg"
          data-aos="fade-up"
        >
          <Image
            src="https://cdn.hauntedspace.io/galaxy-games/TOKEN_v3_PNG.webp"
            alt="Token Icon"
            className="w-32 md:hidden inline-block mb-10 md:mb-0 "
            width={128}
            height={128}
          />
          {/* Flex ONE */}
          <div className="flex md:flex-row flex-col-reverse items-center justify-center md:gap-36 relative md:top-1">
            {/* image on right */}
            <div className="flex items-center justify-center w-64 2xl:w-72 ">
              <div className="flex-[0.7] text-left md:text-right rounded-lg text-xs 2xl:text-base bg-[#100769] p-2">
                <div className="w-[160px] 2xl:w-[200px] ml-auto mr-6 pl-4">
                  MAIN ECOSYSTEM <br /> PAYMENT METHOD
                </div>
              </div>
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -ml-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-07.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
            </div>
            {/* image on left */}
            <div className="flex items-center justify-center w-64 2xl:w-72 mr-5 md:mr-0 ">
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -mr-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-12.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
              <div className="flex-[0.7] text-left rounded-lg text-xs 2xl:text-base bg-[#100769] p-2">
                <div className="w-[160px] 2xl:w-[200px] mr-auto ml-6">
                  STAKE TO ACCESS <br /> NON-INFLATIONARY PERKS
                </div>
              </div>
            </div>
          </div>

          {/* Flex TWO */}

          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:gap-14">
            {/* image on right */}
            <div className="flex items-center justify-center w-64 2xl:w-72  ">
              <div className="flex-[0.7] text-left md:text-right rounded-lg text-xs 2xl:text-base bg-[#100769] p-2">
                <div className="w-[160px] 2xl:w-[200px] ml-auto mr-6 pl-4">
                  ENABLES A SUSTAINABLE ECONOMY
                </div>
              </div>
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -ml-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-08.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://cdn.hauntedspace.io/galaxy-games/TOKEN_v3_PNG.webp"
                alt="Token Icon"
                className="w-32 hidden md:inline-block rounded-full image-container"
                width={128}
                height={128}
              />
              <div className=" left-[30%] top-[-30.5rem] md:top-[-50%]  gradient-04 absolute z-0" />
            </div>
            {/* image on left */}
            <div className="flex items-center justify-center w-64 2xl:w-72 mr-5 md:mr-0">
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -mr-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-11.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
              <div className="flex-[0.7] text-left rounded-lg text-xs 2xl:text-base bg-[#100769] p-2 py-4">
                <div className="w-[160px] 2xl:w-[200px] mr-auto ml-6">
                  DEFLATIONARY TOKENOMICS
                </div>
              </div>
            </div>
          </div>

          {/* Flex THREE */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-0 md:gap-16">
            {/* image on right */}
            <div className="flex items-center justify-center w-64 2xl:w-72 ">
              <div className="flex-[0.7] text-left md:text-right rounded-lg text-xs 2xl:text-base bg-[#100769] p-2">
                <div className="w-[160px] 2xl:w-[200px] ml-auto mr-6 pl-4">
                  STAY COMMITTED <br /> AND GET BENEFITS
                </div>
              </div>
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -ml-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-09.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
            </div>
            {/* image on left */}
            <div className="flex items-center justify-center w-64 2xl:w-72 mr-5 md:mr-0">
              <div
                className="flex items-center justify-center flex-[0.3] h-20 -mr-7 rotate-180"
                style={{
                  backgroundImage: `url('https://cdn.hauntedspace.io/galaxy-games/planetsToken.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src="/desktop/1-10.png"
                  className="w-8 rotate-180 bg-cover"
                  alt="Token Icon"
                  width={32}
                  height={27}
                />
              </div>
              <div className="flex-[0.7] text-left rounded-lg text-xs 2xl:text-base bg-[#100769] p-2">
                <div className="w-[160px] 2xl:w-[210px] mr-auto ml-6">
                  ONE TOKEN TO RULE THEM ALL <br /> (Games and Gamers)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="text-center py-10 relative z-10">
        <a
          className="btn-primary px-12"
          href="https://galaxy-games-studio.gitbook.io/whitepaper/usdgaga"
          target="_blank"
          rel="noopener noreferrer"
            >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
