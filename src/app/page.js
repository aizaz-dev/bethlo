import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 pt-35 flex flex-col pt-16 md:pt-55 items-center justify-center text-center text-text-primary">
      
      {/* Hero Message */}
      <h1 className="font-roboto font-light text-2xl sm:text-3xl md:text-[35px] leading-7 sm:leading-8 md:leading-[36px] text-[#707070] mb-4 sm:mb-5 py-2 sm:py-3 px-4">
        Welcome! We invite you to join us for worship service each Sunday at 9 AM.
      </h1>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full px-4 sm:px-0">

        {/* Left Image */}
        <div className="overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md bg-bg-card shadow-[0_8px_16px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)]">
          <Image
            src="/HomePage/1.jpg"
            alt="Church Altar"
            width={500}
            height={500}
            className="object-cover w-full h-64 sm:h-80 md:h-[500px]"
          />
        </div>

        {/* Right Image */}
        <div className="overflow-hidden w-full max-w-full lg:max-w-3xl bg-bg-card shadow-[0_8px_16px_rgba(0,0,0,0.2),_0_6px_20px_rgba(0,0,0,0.19)]">
          <Image
            src="/HomePage/home2.png"
            alt="Church Building"
            width={750}
            height={500}
            className="object-cover w-full h-64 sm:h-80 md:h-[500px]"
          />
        </div>

      </div>
    </main>
  );
}