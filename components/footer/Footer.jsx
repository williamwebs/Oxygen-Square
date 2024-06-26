import Link from "next/link";
import Btn from "../button/Btn";

const Footer = () => {
  return (
    <footer className="bg-black py-10 rounded-3xl text-textGray">
      <div className="max-w-5xl mx-auto px-5 md:px-0">
        <h3 className="font-bold font-grotesk w-full text-3xl text-white text-center">
          Subscribe to get notified when we launch
        </h3>
        <p className="font-normal font-satoshi w-full text-sm text-center my-1">
          By subscribing with your mail, you will accept our privacy policy
        </p>

        {/* form */}
        <form className="max-w-sm mx-auto mt-8 md:h-[40px] rounded-md md:rounded-full overflow-hidden flex flex-col md:flex-row md:items-stretch gap-2">
          <input
            type="email"
            name=""
            id=""
            className="rounded-full md:flex-1 h-[40px] px-4 outline-none border-none text-textGray text-base placeholder:text-sm font-satoshi bg-gray-900"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-primary text-white text-sm font-grotesk px-4 rounded-full h-[40px]"
          >
            Join waitlist
          </button>
        </form>

        {/* links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 justify-between mt-20 mb-10">
          <div className="">
            <h6 className="font-bold text-white font-satoshi text-xs uppercase mb-4">
              Company
            </h6>
            <div className="flex flex-col gap-2">
              <Link
                href={"/about-us"}
                className="text-sm text-textGray font-satoshi"
              >
                About
              </Link>
              <Link
                href={"/locations"}
                className="text-sm text-textGray font-satoshi"
              >
                Locations
              </Link>
              <Link
                href={"/blog"}
                className="text-sm text-textGray font-satoshi"
              >
                Blog
              </Link>
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Events
              </Link>
            </div>
          </div>
          <div className="">
            <h6 className="font-bold text-white font-satoshi text-xs uppercase mb-4">
              Address
            </h6>
            <p className="text-sm text-white font-satoshi">Nigeria</p>
            <Link
              href={"https://maps.app.goo.gl/mHXuippwwoMGBxmdA"}
              className="text-sm text-textGray font-satoshi"
            >
              FUOYE Campus, Oye-Ekiti State
            </Link>
          </div>
          <div className="">
            <h6 className="font-bold text-white font-satoshi text-xs uppercase mb-4">
              Services
            </h6>
            <div className="flex flex-col gap-2">
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Coworking Spaces
              </Link>
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Tech Academy
              </Link>
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Podcast Studio
              </Link>
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Cinema
              </Link>
              <Link href={"/"} className="text-sm text-textGray font-satoshi">
                Bakery & Coffee Shop
              </Link>
            </div>
          </div>
          <div className="">
            <h6 className="font-bold text-white font-satoshi text-xs uppercase mb-4">
              Contact Us
            </h6>
            <div className="flex flex-col gap-2">
              <Link
                href={"mailto:oxygensquarehelp@gmail.com"}
                className="text-sm text-textGray font-satoshi"
              >
                oxygensquarehelp@gmail.com
              </Link>
              <Link
                href={"tel:+23481660812613"}
                className="text-sm text-textGray font-satoshi"
              >
                +234 816 6081 2613
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
