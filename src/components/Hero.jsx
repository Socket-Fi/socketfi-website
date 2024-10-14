import React from "react";
import dashboard from "../assets/dashboard.jpeg";

export default function Hero() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Connecting millions of social media users to web3
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
            Decentralized Web3 connector for social networks{" "}
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-8">
            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-green-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Simply Copy & Paste
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-blue-600 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Easy to Customize
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <svg
                className="flex-shrink-0 text-red-500 w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <div className="ml-5">
                <h3 className="text-xl font-semibold text-black">
                  Made with TailwindCSS
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center mt-8 lg:justify-start sm:justify-center sm:flex-row lg:mt-16 sm:space-x-5">
              <a
                href="#"
                title=""
                className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-8
                        py-2
                        text-base
                        font-bold
                        text-white
                        transition-all
                        duration-200
                        bg-gray-900
                        border-2 border-transparent
                        sm:w-auto
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        font-pj
                        hover:bg-opacity-90
                        rounded-xl
                    "
                role="button"
              >
                Go to App
              </a>

              <a
                href="#"
                title=""
                className="
          
                        inline-flex
                        items-center
                        justify-center
                        w-48
                        px-8
                        py-2
                        mt-5
                        text-base
                        font-bold
                        text-gray-900
                        transition-all
                        duration-200
                       gap-1
                        sm:w-autojustify-center sm:mt-0
                        rounded-xl
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900
                        focus:bg-gray-900
                        hover:text-white
                        focus:text-white
                        hover:border-gray-900
                        focus:border-gray-900
                    "
                role="button"
              >
                Documentation
                <div className="">
                  <svg
                    className="h-5 w-auto"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1077_9075)">
                      <path
                        d="M9.16699 14.8887L20.167 3.88867"
                        stroke="black"
                        stroke-linecap="round"
                      />
                      <path
                        d="M13.4492 3.53516H20.5203V10.6062"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.5 13.5V16.26C17.5 17.4179 17.5 17.9968 17.2675 18.4359C17.0799 18.7902 16.7902 19.0799 16.4359 19.2675C15.9968 19.5 15.4179 19.5 14.26 19.5H7.74C6.58213 19.5 6.0032 19.5 5.56414 19.2675C5.20983 19.0799 4.92007 18.7902 4.73247 18.4359C4.5 17.9968 4.5 17.4179 4.5 16.26V9.74C4.5 8.58213 4.5 8.0032 4.73247 7.56414C4.92007 7.20983 5.20982 6.92007 5.56414 6.73247C6.0032 6.5 6.58213 6.5 7.74 6.5H11"
                        stroke="black"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1077_9075">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full rounded-lg shadow-xl"
              // src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
              src={dashboard}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
