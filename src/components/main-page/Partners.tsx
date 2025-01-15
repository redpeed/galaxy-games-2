import Image from "next/image";

function Partners() {
  return (
    <div
      id="partners"
      className="relative 2xl:min-h-[70vh] 2xl:pt-52 bg-cover bg-primary z-10 flex items-center justify-center pt-14 "
    >
      <div className="absolute inset-0 bg-primary/10 "></div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center mb-20 md:mb-40 w-full  "
      >
        <Image
          className="w-40 h-16 bg-cover md:mb-10"
          src="https://cdn.hauntedspace.io/galaxy-games/Lens_Flare_purple_PNG.webp"
          alt="Indicator"
          width={160}
          height={64}
        />
        <h2 className="text-4xl uppercase text-white md:-mt-14 md:mb-16">
          Partners
        </h2>
        <div className="wrapper w-full">
          <div className="itemLeft item1 flex items-center justify-center">
            <Image src="/desktop/11-07.png" alt="Partner 1" width={188} height={111}/>
          </div>
          <div className="itemLeft item2 flex items-center justify-center">
            <Image src="/desktop/11-08.png" alt="Partner 2"  width={188} height={111} />
          </div>
          <div className="itemLeft item3 flex items-center justify-center">
            <Image src="/desktop/11-09.png" alt="Partner 3"  width={188} height={111} />
          </div>
          <div className="itemLeft item4 flex items-center justify-center">
            <Image src="/desktop/11-10.png" alt="Partner 4" width={188} height={111} />
          </div>
          <div className="itemLeft item5 flex items-center justify-center">
            <Image src="/desktop/11-11.png" alt="Partner 5" width={188} height={111} />
          </div>
          <div className="itemLeft item6 flex items-center justify-center">
            <Image src="/desktop/11-14.png" alt="Partner 6" width={188} height={111} />
          </div>
          <div className="itemLeft item7 flex items-center justify-center">
            <Image src="/desktop/12-07.png" alt="Partner 7" width={188} height={111} />
          </div>
          <div className="itemLeft item8 flex items-center justify-center">
            <Image src="/desktop/12-08.png" alt="Partner 8" width={188} height={111} />
          </div>
        </div>
        <div className="wrapper">
          <div className="itemRight item1 flex items-center justify-center">
            <Image src="/desktop/Avalanche_png.png" alt="Partner 9" width={188} height={111} />
          </div>
          <div className="itemRight item2 flex items-center justify-center">
            <Image src="/desktop/MeritCircle_png.png" alt="Partner 10" width={188} height={111} />
          </div>
          <div className="itemRight item3 flex items-center justify-center">
            <Image src="/desktop/12-06.png" alt="Partner 11" width={188} height={111} />
          </div>
          <div className="itemRight item4 flex items-center justify-center">
            <Image src="/desktop/12-07.png" alt="Partner 12" width={188} height={111} />
          </div>
          <div className="itemRight item5 flex items-center justify-center">
            <Image src="/desktop/12-08.png" alt="Partner 13" width={188} height={111} />
          </div>
          <div className="itemRight item6 flex items-center justify-center">
            <Image src="/desktop/11-08.png" alt="Partner 14" width={188} height={111}/>
          </div>
          <div className="itemRight item7 flex items-center justify-center">
            <Image src="/desktop/11-10.png" alt="Partner 15" width={188} height={111} />
          </div>
          <div className="itemRight item8 flex items-center justify-center">
            <Image src="/desktop/11-11.png" alt="Partner 16" width={188} height={111} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
