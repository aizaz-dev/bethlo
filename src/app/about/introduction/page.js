import Image from "next/image";

export default function Introduction() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12  pt-25 md:pt-55 leading-relaxed text-text-primary">
      {/* Section: Location and Affiliation */}
      <section className="mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl mb-3 text-primary font-light">
          Our Location And Church Affiliation
        </h2>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-text-primary">
          For those who are wondering and have not noticed, we're located in
          Baudette, Minnesota. Specifically, we are on the west side of town and
          on the north side of Minnesota State Highway 11, just across the street
          from the Baudette Motel. Baudette is located on the United States side
          of the Rainy River; a river shared with Canada while also dividing the
          two countries. If you were to follow it about a dozen miles north of
          Baudette, you see where it empties into Lake of the Woods. 
        </p>
        <p className="text-base sm:text-lg text-text-primary">
          Bethlehem Lutheran Church is affiliated with the Minnesota North
          District of the Lutheran Church Missouri Synod. The Baudette and
          Warroad congregations are joined in fellowship and through a joint
          parish agreement.
        </p>
      </section>

      {/* Section: Meet the Pastor */}
      <section className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 lg:gap-10">
        {/* Pastor Image */}
        <div className="flex-shrink-0 w-full lg:w-[280px] flex justify-center lg:justify-start">
          <Image
            src="/intro/man.jpg"
            alt="Pastor portrait"
            width={280}
            height={350}
            className="rounded-lg shadow-lg object-cover w-full max-w-xs sm:max-w-sm lg:w-[230px] h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-base sm:text-lg text-text-primary">
          <h3 className="text-xl sm:text-2xl mb-4 text-text-primary font-light">
            Meet the Pastor
          </h3>
          <p className="mb-4 sm:mb-6">
            Rev. William Moeller, Jr. has been serving as Pastor of the Warroad
            and Baudette Bethlehem Lutheran Churches since 2011. Pastor Moeller
            graduated from Concordia Seminary, St. Louis, Missouri, in 1993. He
            resides at the church parsonage in Baudette.
          </p>
          <p className="mb-4 sm:mb-6 font-medium">
            You may contact Pastor by phone with the numbers listed below or by<br className="hidden sm:block" />
            leaving a message at the Church.
          </p>
          <div className="space-y-2">
            <div className="flex flex-col xs:flex-row">
              <span className="w-16 sm:w-20 font-medium">Home</span>
              <span>(218) 634-2808</span>
            </div>
            <div className="flex flex-col xs:flex-row">
              <span className="w-16 sm:w-20 font-medium">Cell</span>
              <span>(320) 248-1894</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export const metadata = {
  title: "Introduction",
  description: "Learn about our location, affiliation, and pastor at Bethlehem Lutheran Church.",
  keywords: ["Introduction", "Location", "Affiliation", "Pastor", "Bethlehem Lutheran Church", "Baudette", "LCMS"],
  alternates: { canonical: "/about/introduction" },
  openGraph: { title: "Introduction", url: "/about/introduction", images: ["/og-default.jpg"] },
};