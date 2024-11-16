import React from "react";
import HeroSection from "../component/HeroSection";
import HeroPhoto2 from "../assets/Hero2.png";
import Donate from "../assets/Donate.png";
import Footer from "../component/Footer";
import EventList from "../component/EventList";
import Carousel from "../component/Carousel";
import Event from "../component/Event";

function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-200px)] max-w-screen-xl container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        <HeroSection />
      </div>
      <div className="pt-12 pb-24">
        <section className="text-gray-600 body-font bg-customYellow max-w-screen-xl mx-auto rounded-lg ">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-customRed">
                Empowering Journalists to Uphold Integrity and Excellence in
                Reporting
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                At our organization, we are dedicated to promoting ethical
                journalism that informs and empowers communities. Our mission is
                to foster a culture of integrity, transparency, and excellence
                in media, ensuring that every voice is heard.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        {" "}
        <Carousel />
      </div>
      <div className="pt-12 pb-24 ">
        <section className="text-gray-600 body-font">
          <div className="max-w-screen-xl container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h4 className="font-semibold sm:text-4  xl text-3xl mb-4 font-lg text-customRed">
                Empowering Journalists to Uphold Truth and Foster Informed
                Communities.
                <span className="hidden lg:inline-block"> </span>
              </h4>
              <p className="mb-8 leading-relaxed">
                At our organization, we champion the principles of integrity and
                excellence in journalism. Join us in our mission to promote
                transparency and accountability in the media.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded transition duration-300 ease-in-out hover:shadow-2xl"
                alt="hero"
                src={HeroPhoto2}
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <Event />
      </div>
      <div className="pt-12 pb-12">
        <section className="text-gray-600 body-font bg-customYellow max-w-screen-xl mx-auto rounded-lg">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-customRed">
                Our Commitment to Integrity and Excellence in Journalism Starts
                Here
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                At our organization, we strive to uphold the highest standards
                in journalism. Our dedicated team works tirelessly to promote
                transparency and accountability in media. Join us as we champion
                the values that define quality journalism.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-12 pb-12">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center max-w-screen-xl">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Support Journalism with Your Donation
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">
                Your contribution helps us promote integrity and excellence in
                journalism for a better tomorrow.
              </p>
              <div className="flex justify-center">
                <button
                  id="DonateBtn"
                  className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg"
                >
                  Donate
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src={Donate}
              ></img>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
