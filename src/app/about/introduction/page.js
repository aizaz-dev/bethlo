import Image from "next/image";

export default function Introduction() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-50 leading-relaxed text-text-primary">
      {/* Section: Location and Affiliation */}
      <section className="mb-16">
        <h2 className="text-lg mb-3 text-primary font-semibold shadow-text-light">
          Our Location And Church Affiliation
        </h2>
        <p className="mb-6 text-lg text-text-primary">
          For those who are wondering and haven’t noticed, we’re located in
          Baudette, Minnesota. Specifically, we’re on the west side of town and
          on the north side of Minnesota State Highway 11, just across the street
          from the Baudette Motel. Baudette is located on the United States side
          of the Rainy River; a river shared with Canada while also dividing the
          two countries. If you were to follow it about a dozen miles north of
          Baudette, you’d see where it empties into Lake of the Woods.
        </p>
        <p className="text-lg text-text-primary">
          Bethlehem Lutheran Church is affiliated with the Minnesota North
          District of the Lutheran Church Missouri Synod. The Baudette and
          Warroad congregations are joined in fellowship and through a joint
          parish agreement.
        </p>
      </section>

      {/* Section: Meet the Pastor */}
      <section className="flex flex-col md:flex-row items-start gap-10">
        {/* Pastor Image */}
        <div className="flex-shrink-0 w-full md:w-[280px]">
          <Image
            src="/intro/man.jpg"
            alt="Pastor portrait"
            width={280}
            height={240}
            className="rounded-lg shadow-card-light object-cover w-full h-[350]"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-lg text-text-primary">
          <h3 className="text-2xl font-semibold mb-4 text-text-primary shadow-text-light">
            Meet the Pastor
          </h3>
          <p className="mb-6">
            Rev. William Moeller, Jr. has been serving as Pastor of the Warroad
            and Baudette Bethlehem Lutheran Churches since 2011. Pastor Moeller
            graduated from Concordia Seminary, St. Louis, Missouri, in 1993. He
            resides at the church parsonage in Baudette.
          </p>
          <p className="mb-6">
            You may contact Pastor by phone with the numbers listed below or by
            leaving a message at the Church.
          </p>
          <p className="whitespace-pre-line text-lg text-text-primary">
            <span className="block">
              <strong className="text-primary">Home</strong>  (218) 634-2808
            </span>
            <span className="block">
              <strong className="text-primary">Cell</strong>  (320) 248-1894
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
