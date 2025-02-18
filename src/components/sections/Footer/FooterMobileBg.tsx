function FooterMobileBg() {
  return (
    <div
      className="absolute w-full h-[700px] bottom-[100px] left-0"
      style={{
        backgroundImage: `url('/footer-mobile-bg.svg')`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}


export default FooterMobileBg;
