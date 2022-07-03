import { useState, useEffect } from "react";
import { HiMenu, HiLogin } from "react-icons/hi";
import { SiDiscord } from "react-icons/si";

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [show, setShow] = useState(false);

  const window = getWindow();

  function onScroll() {
    if ((getWindow()?.pageYOffset || 0) < 20) setIsAtTop(true);
    else if (isAtTop) setIsAtTop(false);
  }

  useEffect(() => {
    if (!window) return;
    setTimeout(onScroll, 0);
    getWindow()?.addEventListener("scroll", onScroll);
    return () =>
      getWindow()?.removeEventListener("scroll", onScroll);
  }, []);

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
              Features
            </li>
            <li className="text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight hover:cursor-pointer hover:text-black">
              Community
            </li>
            <li className="text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight hover:cursor-pointer hover:text-black">
              Contact
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
              ${show && "bg-black/5 border-black/5"}
            `}
          >
            <HiMenu size={25} />
          </button>
          {show && (
            <div className="absolute right-0 top-[2.5rem] z-[100]">
              <div
                className="flex flex-row items-center justify-center py-1 min-w-[177px] gap-1.5 border border-gray rounded-md overflow-hidden relative
              
              backdrop-blur border-b border-gray
             bg-white
              "
              >
                <ul className="flex flex-col flex-1 gap-1 py-2 m-0 list-none relative z-[50]">
                  <li className="mx-1 flex items-center gap-2 duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md">
                    <span>
                      <HiLogin size={18} />
                    </span>
                    Login Now
                  </li>
                  <li className="mx-1  flex items-center gap-2 duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md">
                    <span>
                      <SiDiscord size={16} />
                    </span>
                    Join Discord
                  </li>
                  <hr className="block h-[1px] bg-black/5 border-0 my-0.5" />
                  <li className="mx-1  duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md">
                    Features
                  </li>
                  <li className="mx-1  duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md">
                    Community
                  </li>
                  <li className="mx-1 duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md">
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
