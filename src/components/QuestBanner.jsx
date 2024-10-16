import React from "react";

export default function QuestBanner() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-10 sm:gap-16 lg:grid-cols-2">
          <div>
            <div className="max-w-sm mx-auto bg-gray-900 xl:max-w-md rounded-2xl -rotate-3">
              <div className="p-6 sm:px-10 sm:py-12">
                <img
                  className="w-auto h-7"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/crowny-logo.svg"
                  alt=""
                />

                <blockquote className="mt-6">
                  <p className="text-lg font-normal leading-relaxed text-gray-200 font-pj">
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change.”
                  </p>
                </blockquote>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/avatar-female.png"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-lg font-bold text-gray-400 font-pj">
                        Jerome Bell
                      </p>
                      <p className="text-base font-pj font-normal text-gray-400 mt-0.5">
                        CTO, Waverio
                      </p>
                    </div>
                  </div>

                  <img
                    className="w-auto h-12"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/signature.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left">
            <h2 className="text-3xl font-bold text-black sm:text-4xl xl:text-4xl font-pj">
              Join Active Quests and Airdrops
            </h2>
            <p className="mt-8 text-base font-normal leading-7 text-gray-700 font-pj">
              Participate in 100s of active quests, bounties, airdrops, and
              community engagement events to earn on-chain loyalty points,
              badges, rewards and more..
            </p>

            <form action="#" method="POST" className="mt-16">
              <label for="" className="text-lg font-bold text-gray-900 font-pj">
                {" "}
                View and join active quests and bounties
              </label>
              <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <div className="relative">
                  <div className="flex flex-col items-center mt-2 lg:justify-start sm:justify-center sm:flex-row  sm:space-x-5">
                    <a
                      href="https://app.socket.fi/quests"
                      title=""
                      className="
                        relative
                        inline-flex
                        items-center
                        justify-center
                        w-full
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
                      target="_blank"
                    >
                      View & join Quests
                    </a>

                    <a
                      href="https://docs.socket.fi/"
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
                        
                     
                       
                    "
                      target="_blank"
                    >
                      Learn more
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
                  {/* <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                    className="block w-full px-5 py-6 text-base font-normal text-white placeholder-gray-400 bg-gray-900 border border-transparent rounded-xl focus:border-white focus:ring-1 focus:ring-white font-pj focus:outline-none"
                  />

                  <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                    <button
                      type="submit"
                      className="
                                                inline-flex
                                                items-center
                                                justify-center
                                                w-full
                                                px-8
                                                py-4
                                                text-base
                                                font-bold
                                                text-gray-900
                                                transition-all
                                                duration-200
                                                bg-white
                                                border border-transparent
                                                sm:py-3 sm:w-auto
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                                                font-pj
                                                hover:bg-opacity-90
                                                rounded-xl
                                            "
                    >
                      Get started now
                    </button>
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
