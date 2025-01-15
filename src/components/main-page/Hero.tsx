import Image from "next/image";

function Hero() {

  return (
    <div
      id="home"
      className="relative h-screen md:h-[107vh] bg-top bg-cover bg-hero "
    >
      {/* <div className="absolute inset-0 bg-blue-900/30 "></div> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://cdn.hauntedspace.io/galaxy-games/homepage.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>



      <div className="relative z-10 flex flex-col pt-20 justify-center items-center h-full text-center text-white">
        <div data-aos="fade-up" data-aos-delay="600">
          <Image
            src="/desktop/logo_v.png"
            className="w-[18rem] 2xl:w-[30rem]"
            alt="Galaxy Games Logo"
            width={288}
            height={89}
          />
        </div>
        <a
          data-aos="fade-up"
          data-aos-delay="850"
          href="#games"
          className="mt-4 btn-primary px-10 2xl:mt-8  "
        >
          Learn More
        </a>
      </div>
      <div className={"absolute bottom-0 left-0 right-0 z-30"}>
        <Image
          src="/desktop/bottom-curve.png"
          alt="Decoration"
          fill
        />
      </div>
    </div>
  );
}

export default Hero;
