import PartnersRunningLine from "@/components/sections/Partners/components/PartnersRunningLine";
import PageSection from "@/components/common/PageSection";

function Partners() {
  return (
    <PageSection
      pageTitle={`Partners`}
      className={"bg-nebula-2-"}
      titleClassName={"mb-0"}
    >

      <div className="flex flex-col items-center justify-center w-full  ">
        <PartnersRunningLine
          toLeftDirection={true}
          images={[
            '/partners/11-07.png',
            '/partners/11-08.png',
            '/partners/11-09.png',
            '/partners/11-10.png',
            '/partners/11-11.png',
            '/partners/11-14.png',
            '/partners/11-07.png',
            '/partners/11-08.png',
          ]}
        />
        <PartnersRunningLine
          toLeftDirection={false}
          images={[
            '/partners/Avalanche_png.png',
            '/partners/MeritCircle_png.png',
            '/partners/12-06.png',
            '/partners/12-07.png',
            '/partners/12-08.png',
            '/partners/11-08.png',
            '/partners/11-10.png',
            '/partners/11-11.png',
          ]}
        />
      </div>
    </PageSection>
  );
}

export default Partners;
