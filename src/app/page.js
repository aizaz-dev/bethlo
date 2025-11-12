import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 py-12 pt-25 flex flex-col items-center justify-center text-center">
      {/* Hero Message */}
      <h1 className="text-2xl md:text-3xl font-light text-gray-700 mb-12 leading-relaxed">
        Welcome! We invite you to join us for worship service each Sunday at 9 AM.
      </h1>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Left Image - Smaller */}
        <div className="shadow-lg rounded-2xl overflow-hidden w-full max-w-sm">
          <img
            src="https://images.unsplash.com/photo-1580301762398-bb1b38a5a6c5?q=80&w=800&auto=format&fit=crop"
            alt="Church Altar"
            width={400}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Right Image - Larger */}
        <div className="shadow-lg rounded-2xl overflow-hidden w-full max-w-2xl">
          <img
            src="https://images.unsplash.com/photo-1602524208335-81a2a2bbfae5?q=80&w=1200&auto=format&fit=crop"
            alt="Church Building"
            width={600}
            height={500}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
