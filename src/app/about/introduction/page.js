import Image from "next/image";

export default function Introduction() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 text-gray-700 pt-50 leading-relaxed">
      {/* Section: Location and Affiliation */}
      <section className="mb-16">
        <h2 className="text-lg mb-3  text-gray-700">
          Our Location And Church Affiliation
        </h2>
        <p className="mb-6 text-lg">
          For those who are wondering and haven’t noticed, we’re located in
          Baudette, Minnesota. Specifically, we’re on the west side of town and
          on the north side of Minnesota State Highway 11, just across the street
          from the Baudette Motel. Baudette is located on the United States side
          of the Rainy River; a river shared with Canada while also dividing the
          two countries. If you were to follow it about a dozen miles north of
          Baudette, you’d see where it empties into Lake of the Woods.
        </p>
        <p className="text-lg">
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
          <img
            src="https://images.unsplash.com/photo-1606813902912-cb9b2c59b8c3?q=80&w=400&auto=format&fit=crop"
            alt="Pastor portrait"
            width={280}
            height={340}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
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
          <p className="whitespace-pre-line text-lg">
            <span className="block">
              <strong>Home</strong>  (218) 634-2808
            </span>
            <span className="block">
              <strong>Cell</strong>  (320) 248-1894
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
