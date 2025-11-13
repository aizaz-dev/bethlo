import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-50 flex flex-col items-center justify-center text-center text-text-primary">
      {/* Hero Message */}
      <h1 className="text-2xl md:text-3xl font-light text-text-primary mb-5 leading-relaxed">
        Welcome! We invite you to join us for worship service each Sunday at 9 AM.
      </h1>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Left Image */}
        <div className="overflow-hidden w-full max-w-sm  bg-bg-card shadow-[0_8px_16px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)]">
          <Image
            src="/HomePage/1.jpg"
            alt="Church Altar"
            width={400}
            height={500}
            className="object-cover w-full h-[500px]"
          />
        </div>

        {/* Right Image */}
        <div className="overflow-hidden w-full max-w-2xl  bg-bg-card shadow-[0_8px_16px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)]">
          <Image
            src="/HomePage/home2.png"
            alt="Church Building"
            width={600}
            height={500}
            className="object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </main>
  );
}
