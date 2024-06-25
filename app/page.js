import Btn from "@/components/button/Btn";
import Pricing from "@/components/pricing/Pricing";
import { services, workFlow } from "@/constants/contstants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="max-w-5xl mx-auto px-5 md:px-0">
        {/* hero section */}
        <header className="flex flex-col gap-10 items-center py-10 text-center relative">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold font-grotesk text-5xl text-black animate-pulse">
              The Breathing Space
            </h1>
            <p className="span max-w-lg">
              One-stop shop for productivity, work and leisure in underserved
              rural university communities in Nigeria.
            </p>
            <div className="bg-[#EAEEFB] rounded-full px-5 py-2 z-10">
              <p className="font-grotesk font-medium text-lg text-[#0B2F96]">
                Pilot MVP Launch. coming soon...
              </p>
            </div>
            <div className="mt-4 z-10">
              <Btn href={"https://bit.ly/pilotmvp"} text={"Join waitlist"} />
            </div>
          </div>
          <div className="hero__bg bg-no-repeat bg-cover h-[400px] w-full absolute top-0 md:top-14 z-0"></div>
          <div className="mockup h-[400px] max-w-[735px] md:-ml-4 w-full bg-no-repeat bg-cover bg-center rounded-t-3xl border-2 overflow-hidden p-5">
            embed video here
          </div>
        </header>
        {/* explore our services */}
        <section className="">
          <h3 className="text-center font-bold font-grotesk text-2xl text-black">
            Explore our Services
          </h3>
          <p className="span">
            Beyound co-working, we provide additional amenities all under one
            roof
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-4 mt-20">
            {services.map((service) => (
              <div className="flex items-start gap-3">
                <div className="w-[60px]">
                  <Image src={service.icon} width={100} height={100} alt="" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base text-[#0F2137] font-bold font-grotesk mb-1 capitalize">
                    {service.heading}
                  </h3>
                  <p className="text-base font-normal font-satoshi mb-4">
                    {service.text}
                  </p>
                  <Link
                    href={service.href}
                    className="text-[14px] text-primary font-medium font-grotesk"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* how it works */}
        <section className="">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between gap-10">
            {/* image */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              <Image
                src={"/images/how-it-works.jpg"}
                width={500}
                height={700}
                alt="man holding a card"
              />
            </div>
            {/* content */}
            <div className="w-full md:w-1/2 ml-0 md:ml-20">
              <p className="text-primary font-bold font-satoshi text-sm ml-0 md:ml-5">
                Seamless Experience
              </p>
              <h3 className="font-bold font-grotesk text-2xl text-black ml-0 md:ml-5">
                How it Works?
              </h3>

              <div className="flex flex-col gap-3 mt-5">
                {workFlow.map((i) => (
                  <div className="flex items-start gap-3 p-5 rounded-lg shadow-md">
                    <div className="w-[40px]">
                      <Image src={i.icon} width={100} height={100} alt="" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base text-[#0F2137] font-bold font-grotesk capitalize">
                        {i.heading}
                      </h3>
                      <p className="text-base font-normal font-satoshi mb-4">
                        {i.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* contribution to SDG */}
      <section className="mt-1 bg-bgGray">
        <div className="max-w-5xl mx-auto px-5 md:px-0">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-start justify-between gap-10">
            {/* content */}
            <div className="w-full md:w-1/2">
              <div className="w-full flex flex-col gap-3">
                <p className="text-primary font-bold font-satoshi text-sm">
                  Beyond Profit
                </p>
                <h3 className="font-bold font-grotesk w-full md:w-[66%] text-2xl text-black">
                  We are also active contributors to the United Nation SDGs
                </h3>
                <p className="font-normal font-satoshi w-full md:w-[90%] text-base pr-10">
                  With a continuous influx of urban dwellers and young people to
                  these rural communities driven mostly by educational pursuits
                  and employment opportunities, Oxygen Square aims to design
                  safe and sustainable spaces that reflect their needs and
                  aspirations while promoting the UN sustainable development
                  goals.
                </p>
                <div className="mt-4">
                  <Btn
                    href={"https://bit.ly/oxygenqpartner"}
                    text={"Partner with us"}
                  />
                </div>
              </div>
            </div>
            {/* image */}
            <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
              <Image
                src={"/images/17-SDGs.png"}
                width={350}
                height={500}
                alt="man holding a card"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* solutions */}
      <section className="max-w-5xl mx-auto px-5 md:px-0">
        <h3 className="text-center font-bold font-grotesk text-2xl text-black">
          Tailored solutions for diverse painpoint.
        </h3>
        <p className="span max-w-2xl mx-auto px-1">
          Whether you are a student, entrepreneur, researcher, remote worker,
          tech enthusiast, creative or seeking fun, there is something for you!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-4 mt-20">
          <div className="rounded-3xl overflow- shadow">
            <Image
              src={"/images/person-1.png"}
              width={300}
              height={100}
              alt="remote tech worker"
              className="hover:grayscale-[100%] cursor-pointer transition-all duration-300"
            />
          </div>
          <div className="rounded-3xl overflow- shadow">
            <Image
              src={"/images/person-2.png"}
              width={300}
              height={100}
              alt="remote tech worker"
              className="hover:grayscale-[100%] cursor-pointer transition-all duration-300"
            />
          </div>
          <div className="rounded-3xl overflow- shadow">
            <Image
              src={"/images/person-3.png"}
              width={300}
              height={100}
              alt="remote tech worker"
              className="hover:grayscale-[100%] cursor-pointer transition-all duration-300"
            />
          </div>
          <div className="rounded-3xl overflow- shadow">
            <Image
              src={"/images/person-4.png"}
              width={300}
              height={100}
              alt="remote tech worker"
              className="hover:grayscale-[100%] cursor-pointer transition-all duration-300"
            />
          </div>
        </div>
      </section>
      {/* pricing */}
      <section className="max-w-5xl mx-auto px-5 md:px-0">
        <h3 className="text-center font-bold font-grotesk text-2xl text-black">
          What deal suit you perfect.
        </h3>
        <p className="span max-w-2xl mx-auto px-1">
          We prioritize accessibility and affordability making sure no one is
          left behind.
        </p>

        <Pricing />
      </section>
    </main>
  );
}
