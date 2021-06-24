import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cartalogix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="grid sm:grid-cols-2">
            <div className="bg-[#F4F9FF] px-4 py-28 sm:pl-64 sm:pr-44 sm:py-52 items-center">
              <h1 className="text-3xl sm:text-6xl font-bold text-[#2E3192] uppercase">
                Thermal Paper Done Right!
              </h1>
              <p className="text-base text-gray-700 sm:text-lg mt-4 sm:mt-4">
                We manufacture great quality thermal paper in Pakistan.
              </p>
              <button className="bg-[#1075BB] hover:bg-blue-900 px-5 py-3 text-white mt-12">
                View Our Products
              </button>
            </div>
            <div className="relative order-first sm:order-last z-0">
              <div className="absolute -left-8 top-20 hidden sm:block">
                <Image
                  src="/dots.svg"
                  alt="background dots"
                  layout="intrinsic"
                  width={399}
                  height={475}
                />
              </div>
              <div className="absolute top-32 left-8 hidden sm:block">
                <Image
                  src="/hero-image.jpg"
                  alt="thermal paper and printer"
                  layout="intrinsic"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg=="
                  width={658}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container text-center px-4 my-24 space-y-8">
          <h2 className="text-3xl text-gray-700 font-bold">Our Clients</h2>
          <img
            src="/clients.png"
            alt="client logos"
            className="mx-auto sm:h-24"
          />
        </section>

        <section className="about">
          <div className="grid grid-cols-12 gap-4 justify-center">
            <div className="col-start-2 hidden sm:block">
              <img src="./smalldots.jpg" alt="decorative dots background" />
            </div>
            <div className="col-span-full sm:col-start-3 sm:col-span-4 px-4 sm:px-0">
              <h2 className="text-3xl text-gray-700 font-bold">
                We're CartaLogix
              </h2>
              <p className="mt-12 mb-6">
                CartaLogix was established in 2015 with one mission: to bring a
                high-quality Thermal Paper to the Pakistan. Our passion for
                excellence inspired us in the beginning and continues to drive
                us today. We pride ourselves on offering a superior business
                experience and in the long-term relationships we've built with
                our customers. The most beautiful part of our business is that
                thermal paper is used in every kind of setting, in millions of
                places every day.
              </p>
              <p>
                Our company's unique advantage is that our Thermal Paper Roll
                price is at least 10% lower than other suppliers! Also we always
                provide an easy, accurate, reliable service. We appreciate and
                take care of our customers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between bg-[#2E3192] px-4 py-12 sm:px-6 sm:py-12 mt-12 text-center">
                <h3 className="text-white text-3xl">
                  Smart People, Smart Choice
                </h3>
                <div className="bg-[#E9F3FF] hover:bg-gray-200 px-2 py-2 sm:px-5 sm:py-4 mt-4 sm:mt-0">
                  <Link href="/contact">Contact us</Link>
                </div>
              </div>
            </div>
            <div className="col-span-full sm:col-start-7 sm:col-end-13 order-first sm:order-last">
              <img src="/printer.jpg" alt="printer" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
