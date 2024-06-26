import Team from "@/components/team/Team";
import Image from "next/image";

const AboutUs = () => {
  return (
    <main className="max-w-5xl mx-auto px-5 md:px-0 py-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="w-full md:w-2/5">
          <h3 className="text-left font-bold font-grotesk text-4xl text-black">
            We are dedicated to revolutionizing the way Underserved rural
            University communities in Nigeria access essential amenities and
            opportunities.
          </h3>
        </div>
        <div className="hidden md:block w-full md:w-1/5">
          <Image
            src={"/images/about-hero.avif.png"}
            width={300}
            height={700}
            alt="an african child standing"
          />
        </div>
        <div className="w-full md:w-2/5">
          <div className="flex flex-col gap-2">
            <Image
              src={"/images/big-logo.png"}
              width={500}
              height={100}
              alt="Oxygen Square logo"
            />
            <h3 className="text-left font-bold font-grotesk text-2xl text-black">
              How it started
            </h3>
            <p className="text-[#858B91] text-justify font-normal font-satoshi text-base md:text-sm">
              The Oxygen Square idea was birthed in 2023 with the aim of
              addressing the digital divide and lack of essential amenities in
              underserved rural university communities in Nigeria. Inspired by
              firsthand experiences during undergraduate studies by the founding
              team members, the venture seeks to create &quot;breathing
              spaces &quot; that leverage architecture, sustainable solutions,
              and technology to enhance innovation, collaboration, and
              productivity. By providing highly equipped co-working spaces and
              additional amenities such as a tech academy, cinema, podcast
              studio, and a coffee and bakery shop under one roof, Oxygen Square
              prioritizes accessibility and affordability, bringing
              urban-quality facilities to rural areas.
            </p>
          </div>
        </div>
      </div>
      {/* mission & vision */}
      <section className="flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="w-full md:w-2/5 mt-0 md:mt-10">
          <h3 className="text-center font-bold font-grotesk text-2xl text-black">
            Our Mission
          </h3>
          <p className="span">
            At Oxygen Square, our mission is to create &quot;breathing
            spaces &quot; in underserved rural university communities across
            Nigeria by leveraging architecture, sustainable solutions and
            technology.
          </p>
        </div>
        <div className="w-full md:w-1/5">
          <Image
            src={"/images/time-medal.png"}
            width={300}
            height={700}
            alt="clock"
            className="mx-auto"
          />
        </div>
        <div className="w-full md:w-2/5 mt-0 md:mt-28">
          <h3 className="text-center font-bold font-grotesk text-2xl text-black">
            Our Vision
          </h3>
          <p className="span">
            Our vision is to be the leading catalyst for change in rural
            communities. We envision a future where every individual in
            underserved areas has access to the resources, support, and
            opportunities they need to thrive.
          </p>
        </div>
      </section>
      {/* our values */}
      <section>
        <h3 className="text-center font-bold font-grotesk text-2xl text-black">
          Our Values
        </h3>
        <p className="span">
          Here are guiding principles that drive our mission of empowering
          spaces in rural communities
        </p>

        {/* content */}
        {/* value 1 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 my-10">
          <div className="w-full md:w-1/2 p-5 rounded-3xl bg-[#E2E8F0]">
            <div className="flex flex-col gap-5">
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Empathy
                </h3>
                <p className="span left">
                  We are deeply connected to the pain points of our users and
                  customers. This understanding drives us to go the extra mile
                  to deliver solutions that truly make a difference.
                </p>
              </aside>
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Resilience
                </h3>
                <p className="span left">
                  We recognize that changing the world or making it a better
                  place comes at a cost. But we are committed to pressing
                  through and improving conditions beyond their current state.
                </p>
              </aside>
            </div>
          </div>
          {/* images */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
            <Image
              src={"/images/value-1.png"}
              width={500}
              height={700}
              alt="an african child standing"
            />
          </div>
        </div>

        {/* value 2 */}
        <div className="flex flex-col-reverse md:flex-row items-end justify-between gap-10 my-10">
          {/* images */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden mt-0 md:-mt-72">
            <Image
              src={"/images/value-2.png"}
              width={500}
              height={100}
              alt="an african child standing"
            />
          </div>
          {/* content */}
          <div className="w-full md:w-1/2 p-5 rounded-3xl bg-[#E2E8F0]">
            <div className="flex flex-col gap-5">
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Problem Solvers
                </h3>
                <p className="span left">
                  We don&quot;t wait for others to take action. We take risks
                  and proactively bring about transformation, tackling problems
                  head-on to create impactful change.
                </p>
              </aside>
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Getting it Done
                </h3>
                <p className="span left">
                  We are relentless in our pursuit of excellence. With
                  unwavering determination, we go all out to achieve our goals
                  and ensure that tasks are completed efficiently and
                  effectively.
                </p>
              </aside>
            </div>
          </div>
        </div>

        {/* value 3 */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 my-10">
          <div className="w-full md:w-1/2 p-5 rounded-3xl bg-[#E2E8F0]">
            <div className="flex flex-col gap-5">
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Community
                </h3>
                <p className="span left">
                  We believe in the power of community and the importance of
                  fostering strong connections. Our spaces are designed to
                  promote collaboration, networking, and mutual support among
                  users.
                </p>
              </aside>
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Sustainability
                </h3>
                <p className="span left">
                  We are committed to environmentally responsible practices.
                  From utilizing renewable energy sources to implementing
                  eco-friendly designs, we strive to minimize our ecological
                  footprint and promote sustainability in all aspects of our
                  operations.
                </p>
              </aside>
            </div>
          </div>
          {/* images */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden">
            <Image
              src={"/images/value-3.png"}
              width={500}
              height={700}
              alt="an african child standing"
            />
          </div>
        </div>

        {/* value 4 */}
        <div className="flex flex-col-reverse md:flex-row items-end justify-between gap-10 my-10">
          {/* images */}
          <div className="w-full md:w-1/2 rounded-3xl overflow-hidden mt-0 md:-mt-64">
            <Image
              src={"/images/value-4.png"}
              width={500}
              height={100}
              alt="an african child standing"
            />
          </div>
          {/* content */}
          <div className="w-full md:w-1/2 p-5 rounded-3xl bg-[#E2E8F0]">
            <div className="flex flex-col gap-5">
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Accessibility
                </h3>
                <p className="span left">
                  We prioritize making our services accessible to all,
                  regardless of background or financial means. By offering
                  affordable membership plans and inclusive amenities, we ensure
                  that everyone in the community has the opportunity to benefit
                  from our resources.
                </p>
              </aside>
              <aside>
                <h3 className="text-left font-bold font-grotesk text-2xl text-black">
                  Integrity
                </h3>
                <p className="span left">
                  We operate with honesty, transparency, and ethical principles.
                  Our users &quot; trust is paramount, and we are dedicated to
                  maintaining it through our actions and business practices.
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* team */}
      <section>
        <h3 className="text-center font-bold font-grotesk text-2xl text-black">
          The Team
        </h3>
        <p className="span">
          The amazing individuals who never relent and do solid work with rigor.
        </p>
        <Team />
      </section>
    </main>
  );
};

export default AboutUs;
