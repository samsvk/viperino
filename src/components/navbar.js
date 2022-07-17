import { useState, useEffect } from "react";
import { HiMenu, HiLogin } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";
import { useWindowScroll } from "./useWindowScroll";

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export function Navbar() {
  const [show, setShow] = useState(false);
  const isAtTop = useWindowScroll();

  return (
    <>
      <div
        className={`max-w-[100%] px-6 z-[100] w-full mx-auto fixed left-0 right-0 bottom-0 max-h-[50px]
      justify-start items-start duration-150 hidden md:block ${
        isAtTop
          ? "bg-transparent border-transparent top-8"
          : "backdrop-blur border-b border-gray top-[0rem] bg-white/40"
      }
      `}
      >
        <nav className="max-w-[1155px] mx-auto w-full flex items-center">
          <div className="min-h-[40px] min-w-[40px] w-full h-full max-w-[40px] max-h-[40px] bg-black rounded-full"></div>
          <ul className="flex gap-5 p-0 m-0 list-none  py-3.5 ml-10 flex-1">
            <li className="text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight hover:cursor-pointer hover:text-black">
              <a
                href="#features"
                className="tracking-tight text-inherit hover:text-black"
              >
                Features
              </a>
            </li>
            <li className="text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight hover:cursor-pointer hover:text-black">
              <a
                href="#contact"
                className="tracking-tight text-inherit hover:text-black"
              >
                Community
              </a>
            </li>
            <li className="text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight hover:cursor-pointer hover:text-black">
              <a
                href="#contact"
                className="tracking-tight text-inherit hover:text-black"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center h-full flex-2">
            <button
              className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer 
            hover:bg-black/80 duration-200"
            >
              Login Now
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`max-w-[100%] w-full mx-auto left-0 right-0 bottom-0 max-h-[50px]
         z-[100] absolute justify-start items-start duration-200 backdrop-blur  p-5 top-[0rem] flex md:hidden lg:hidden"
      `}
      >
        <div className="min-h-[40px] min-w-[40px] w-full h-full max-w-[40px] max-h-[40px] bg-black rounded-full relative" />
        <div className="relative flex items-end justify-end flex-1 z-[10000]">
          <button
            onClick={() => setShow((p) => !p)}
            className={`px-1 py-0.5 flex items-center justify-center border border-transparent rounded-md hover:cursor-pointer hover:border-black/5 duration-150 hover:bg-black/5 text-neutral-700/60
              ${show && "bg-gray-100 border-black/5"}
            `}
          >
            <HiMenu size={25} />
          </button>
          {show && (
            <div className="absolute right-0 top-[2.5rem] z-[100]">
              <div
                className="flex flex-row items-center justify-center py-1 min-w-[177px] gap-1.5  border-gray overflow-hidden relative
             border-gray
             bg-white
              border 
              rounded-md 
              border-b 
            bg-gray-800/80
            border-gray-500
              backdrop-blur
              ransition-all duration-200
              "
              >
                <ul className="flex flex-col flex-1 gap-1 py-2 m-0 list-none relative z-[50] px-2">
                  <li
                    className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
                    hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
                  >
                    <span>
                      <HiLogin size={18} />
                    </span>
                    Login Now
                  </li>
                  <li
                    className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
                    hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
                  >
                    <span>
                      <SiDiscord size={16} />
                    </span>
                    Join Discord
                  </li>
                  <hr className="block h-[1px] bg-gray-400/20 border-0 my-0.5" />
                  <li
                    className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
                    hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
                  >
                    Features
                  </li>
                  <li
                    className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
                    hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
                  >
                    Community
                  </li>
                  <li
                    className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
                    hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
                  >
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
