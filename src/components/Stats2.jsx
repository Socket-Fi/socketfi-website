import React from "react";

export default function Stats2() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col max-w-6xl gap-12 mx-auto lg:items-center lg:justify-between lg:flex-row">
          <div className="lg:max-w-md xl:max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Our strength is expressed in numbers
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
              Clarity gives you the blocks & components you need to create a
              truly professional website, landing page or admin panel for your
              SaaS and gives the blocks.
            </p>
          </div>

          <div className="grid grid-cols-2">
            <div className="pt-4 pb-8 pr-8 sm:pr-12 sm:pb-12 sm:pl-4">
              <p className="text-5xl font-semibold tracking-tight text-gray-900">
                36K+
              </p>
              <h3 className="mt-3 text-base font-semibold text-blue-600">
                Satisfied clients
              </h3>
            </div>

            <div className="pt-4 pb-8 pl-8 border-l border-gray-200 sm:pl-12 sm:pb-12 sm:pr-4">
              <p className="text-5xl font-semibold tracking-tight text-gray-900">
                79%
              </p>
              <h3 className="mt-3 text-base font-semibold text-blue-600">
                Download range
              </h3>
            </div>

            <div className="pt-8 pb-4 pr-8 border-t border-gray-200 sm:pr-12 sm:pt-12 sm:pl-4">
              <p className="text-5xl font-semibold tracking-tight text-gray-900">
                64K+
              </p>
              <h3 className="mt-3 text-base font-semibold text-blue-600">
                Success projects
              </h3>
            </div>

            <div className="pt-8 pb-4 pl-8 border-t border-l border-gray-200 sm:pl-12 sm:pt-12 sm:pr-4">
              <p className="text-5xl font-semibold tracking-tight text-gray-900">
                25+
              </p>
              <h3 className="mt-3 text-base font-semibold text-blue-600">
                Awards winning
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
