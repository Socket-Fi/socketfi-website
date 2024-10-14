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
            <h2 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl font-pj">
              Get a demo 💪 Build landing pages.
            </h2>
            <p className="mt-8 text-base font-normal leading-7 text-gray-700 font-pj">
              Create custom landing pages with Rareblocks that converts more
              visitors than any website. With lots of unique blocks, you can
              easily build a page.
            </p>

            <form action="#" method="POST" className="mt-16">
              <label for="" className="text-lg font-bold text-gray-900 font-pj">
                {" "}
                Provide email address to get free demo{" "}
              </label>
              <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div>

                <div className="relative">
                  <input
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
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
