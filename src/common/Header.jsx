import { useEffect, useState } from "react";
import Logo from "../assets/socketLogo.svg";
import { Link } from "react-router-dom";
import { ConnectWallet } from "../utils/soroban";

import { useMediaQuery } from "react-responsive";
import { ArrowRight2 } from "iconsax-react";

export default function Header({
  setUserKey,
  setNetwork,
  userKey,
  isWalletInstalled,
  connecting,
  setConnecting,
}) {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  useEffect(() => {
    if (isLargeScreen) {
      setExpanded(false);
    }
  }, [isLargeScreen]);

  async function handleConnect() {
    setConnecting(() => true);
    await ConnectWallet(setUserKey, setNetwork);
    setConnecting(() => false);
  }

  return (
    <header className=" relative py-4 md:py-6 " x-data="{expanded: false}">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between ">
          <div className="flex-shrink-0">
            <Link
              to="/"
              title=""
              className="flex rounded items-center outline-none   font-bold text-xl gap-1 "
            >
              <img className="w-auto h-9 " src={Logo} alt="" />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-black"
              onClick={toggleExpanded}
            >
              {!expanded ? (
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>
              ) : (
                <span aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>

          {/* <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            <Link
              to="/contracts"
              title=""
              className="text-base font-medium  transition-all duration-200 rounded font-pj hover:text-opacity-50"
            >
              {" "}
              Smart Contracts
            </Link>

            <Link
              to="/playground"
              title=""
              className="text-base font-medium  transition-all duration-200 rounded font-pj hover:text-opacity-50 "
            >
              {" "}
              dApp Playground
            </Link>

            <Link
              to="/sorobuild-ui"
              title=""
              className="text-base font-medium  transition-all duration-200 rounded font-pj hover:text-opacity-50 "
            >
              {" "}
              SoroBuild UI
            </Link>
          </div> */}

          <div className="hidden lg:ml-auto lg:flex  lg:items-center  lg:space-x-10">
            <a
              href="https://docs.sorobuild.io/"
              title=""
              className="text-base font-medium  transition-all flex  gap-1 items-center justify-center duration-200 rounded font-pj hover:text-opacity-50 "
              target="_blank"
            >
              {" "}
              Documentation
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
            </a>

            <button
              className="
                      
                            py-2
                            text-base
                            font-semibold
                            leading-7
                            text-gray-100
                            transition-all
                            duration-200
                    
                         
                            rounded-xl
                            font-pj
                            min-w-[160px]
                            
                           bg-gray-900
                          
                        "
              role="button"
              onClick={handleConnect}
            >
              Go to App
            </button>
          </div>
        </div>

        {expanded && (
          <nav x-show="expanded" x-collapse>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <a
                  onClick={toggleExpanded}
                  href="https://docs.sorobuild.io/"
                  title=""
                  className="text-base font-medium flex gap-1 items-center  transition-all duration-200 rounded font-pj hover:text-opacity-50 "
                  target="_blank"
                >
                  {" "}
                  Documentation
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
                </a>

                <button
                  className="
                      
                            py-2
                            text-base
                            font-semibold
                            leading-7
                            text-gray-100
                            transition-all
                            duration-200
                    
                         
                            rounded-xl
                            font-pj
                            min-w-[160px]
                            
                           bg-gray-900
                          
                        "
                  role="button"
                  onClick={handleConnect}
                >
                  Go to App
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
