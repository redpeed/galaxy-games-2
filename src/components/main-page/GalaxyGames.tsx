import Image from "next/image";

function GalaxyGames() {
  return (
    <div
      id="galaxy-games"
      className="relative 2xl:min-h-[70vh] 2xl:pt-10 bg-contain bg-bottom-custom bg-no-repeat md:bg-center md:bg-cover bg-primary z-10 bg-galaxy-games flex items-center justify-center "
    >
      <div className="absolute top-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-b from-[#01011f] to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-16 2xl:h-44 bg-gradient-to-t from-[#01001e] to-transparent"></div>
      <div className="absolute inset-0 bg-primary/10 "></div>
      <div className="flex flex-col items-center justify-center mb-64 relative z-10">
        <div data-aos="fade-up">
          <Image
            className="w-40 h-16 bg-cover mb-10 mx-auto"
            src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
            alt="Indicator"
            width={160}
            height={64}
          />
          <div>
            <Image
              src="/desktop/logo_v.png"
              className="w-44 -mt-8 mb-16"
              alt="Galaxy Games Logo"
              width={176}
              height={54}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-7 lg:gap-12">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="border-[2.5px] border-[#ea513d] w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://cdn.hauntedspace.io/galaxy-games/left.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#c65445]/30 to-transparent"></div>
            <div className="relative z-10 text-center">
              <div>
                <Image src="/desktop/hero logo-04.png" alt="Hero logo" width={280} height={41} />
              </div>
              <h2 className="text-[#ea513d] font-semibold">
                Raiders of the Sonic Matter
              </h2>
            </div>
            <a
              className="btn-primary w-full relative z-10 flex items-center justify-center gap-2"
              href="https://platform.hauntedspace.io/launcher "
            >
              <span>PLAY NOW</span>
              <span>|</span>
              <span className="text-xs">BETA</span>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="border-[2.5px] border-[#4868a5] w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
              <source src="https://cdn.hauntedspace.io/galaxy-games/mid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#4868a5]/30 to-transparent pointer-events-none"></div>
            <div className="relative z-10 text-center">
              <div>
                <Image src="/desktop/hero logo-04.png" alt="Hero logo" width={280} height={41} />
              </div>
              <h2 className="text-[#4e7dd3] font-semibold">SURVIVAL</h2>
            </div>
            <a
            className="btn-primary w-full relative z-10 text-center"
            href="https://store.epicgames.com/en-US/p/haunted-space-5525ee"
            target="_blank"
            rel="noopener noreferrer"
          >
            COMING SOON
          </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="550"
            className="border-[2.5px] border-violet-700 w-[18rem] h-[22rem] md:w-[15rem] md:h-[18rem] rounded-xl overflow-hidden text-white relative flex flex-col justify-between items-center p-4"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://cdn.hauntedspace.io/galaxy-games/right.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b  from-[#6859df]/30 to-transparent"></div>
            <div>
              <div className="relative z-10 text-center">
                <div>
                  <Image src="/desktop/hero logo-04.png" alt="Hero logo" width={280} height={41} />
                </div>
                <h2 className="text-violet-700 font-semibold">MINI GAME</h2>
              </div>
            </div>
            <a
              className="btn-primary w-full text-center relative z-10"
              href="https://t.me/HauntedSpaceMinigamebot/app?startapp=home"
            >
              PLAY NOW
            </a>
          </div>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className=" mt-14 text-slate-200 tracking-[2.7px]"
        >
          DISCOVER OUR UNIVERSE
        </h2>
      </div>
    </div>
  );
}

export default GalaxyGames;
