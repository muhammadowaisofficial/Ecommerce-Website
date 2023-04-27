import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      {/* Banner Section Start */}
      <div className="bg-[url('/abstract-template-blue-background-white-squares-free-vector.jpg')] bg-cover bg-fixed rounded-b-[30%] text-center pt-36 lg:pt-44 lg:pb-36 pb-20 lg:px-48 px-8 gap-10">
        <h4 className="text-black lg:text-2xl text-md font-extrabold font-serif">
          Earn as you Learn Program
        </h4>
        <h1 className="text-black lg:text-6xl text-3xl font-extrabold my-[20px]">
          Prepare yourself for the Next Generation of Internet with
          <span className="text-blue-700"> Panaverse</span>
        </h1>
        <p className="lg:text-xl text-md lg:px-32 my-5">
          One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
          3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
          Computing/IoT Technologies
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900">
          More Info
        </button>
      </div>
      {/* Banner Section End */}

      {/* Logos Section Start */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row shadow-2xl md:w-[70%] md:justify-around justify-center md:py-[70px] py-[70px] md:px-[0px] px-[40px] space-y-[50px] md:-mt-[90px] -mt-[50px] bg-white rounded-2xl">
          <Image
            src={"/Logo.webp"}
            alt="Panaverse Logo"
            width={150}
            height={150}
          />
          <Image src={"/logo.svg"} alt="Brand Logo" width={150} height={150} />
          <Image
            src={"/saylani.png"}
            alt="Saylani Logo"
            width={150}
            height={150}
          />
        </div>
      </div>
      {/* Logos Section End */}

      {/* Program Section Start */}
      <div className="flex justify-center">
        <div className="lg:flex gap-20 w-[80%]">
          <div className="lg:w-1/2">
            <Image className="mx-auto img" src='/logo2.webp' alt="Proram Image" width={400} height={400} />
          </div>
          <div className="pt-20 lg:w-1/2">
            <h1 className="lg:text-[2.7rem] text-3xl font-bold border-l-blue-600 border-l-[7px] pl-[9px] font-serif">
              Program Of Studies
            </h1>
            <p className="mt-3 text-justify">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each.
              The emphasis will be on hands-on learning by educating students to
              produce projects.
            </p>
            <button className="text-white transition-all duration-500 bg-blue-600 px-6 py-2 rounded-xl lg:text-xl text-sm font-semibold mt-5 hover:bg-blue-900">
              Read More
            </button>
          </div>
        </div>
      </div>
      {/* Program Section End */}

      {/* Instructors Section Start */}
        <div>
            <h1 className="text-black lg:text-4xl text-3xl my-[30px] font-extrabold font-serif text-center ">Our Instructors</h1>
            <div className="flex justify-center mb-10">
                <div className="grid justify-items-center text-3xl lg:grid-cols-3 grid-cols-1 w-[80%]">
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                    <div className="py-8 sm:px-8 rounded-2xl shadow-2xl space-y-2 sm:flex sm:space-y-0 sm:space-x-6 w-[6cm] sm:w-[8cm] mb-[30px]">
                        <Image className="block mx-auto rounded-full" src={'/teacher.webp'} alt="Techer 1" width={"90"} height={"50"} />
                        <div className="text-center space-y-1 sm:text-left">
                            <p className="text-black text-xl font-bold">Zia Khan</p>
                            <p className="text-gray-500 text-sm font-medium">CEO Panaverse</p>
                            <button className="px-4 py-1 transition-all duration-500 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* Instructors Section End */}

      {/* Bootcamp Section Start */}
      <div className="lg:flex my-20">
        <div className="lg:w-1/2 bg-[url('/bootcamp3.jpg')] h-[11cm] bg-cover bg-center"></div>
        <div className="lg:w-1/2 bg-cover bg-[url('/bg123.avif')] -mt-[25px] -mb-[25px]">
            <div className="py-20 pl-[30px] pr-[30px]">
                <h1 className="lg:text-5xl text-3xl font-bold border-l-blue-600 border-l-[7px] pl-[9px] font-serif">Bootcamp 2023</h1>
                <p className="mt-3 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officiis, labore perferendis eius eos recusandae voluptatum suscipit at, architecto impedit tempora excepturi nostrum odio, blanditiis numquam veniam fugiat voluptatem delectus!</p>
                <button className="text-white bg-blue-600 px-6 py-2 transition-all duration-500 rounded-xl lg:text-xl text-sm font-semibold mt-5 hover:bg-blue-900">Read More</button>
            </div>
        </div>
      </div>
      {/* Bootcamp Section End */}

      {/* Program Section Start */}
      <div className="flex justify-center">
        <div className="lg:flex gap-20 w-[80%]">
          <div className="pt-20 lg:w-1/2">
            <h1 className="lg:text-[2.7rem] text-3xl font-bold border-l-blue-600 border-l-[7px] pl-[9px] font-serif">
              Program Of Studies
            </h1>
            <p className="mt-3 text-justify">
              This curriculum is intended for beginners who want to learn
              software development from the ground up. It is going to be a
              fifteen-month-long hybrid program that includes both onsite and
              online classes and is divided into five quarters of 13 weeks each.
              The emphasis will be on hands-on learning by educating students to
              produce projects.
            </p>
            <button className="text-white transition-all duration-500 bg-blue-600 px-6 py-2 rounded-xl lg:text-xl text-sm font-semibold mt-5 hover:bg-blue-900">
              Read More
            </button>
          </div>
          <div className="lg:w-1/2">
            <Image className="mx-auto img" src='/logo2.webp' alt="Proram Image" width={400} height={400} />
          </div>
        </div>
      </div>
      {/* Program Section End */}
    </>
  );
};

export default Home;
