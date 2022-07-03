import { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";

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
        className={`max-w-[100%] px-6 z-[1000] w-full mx-auto fixed left-0 right-0 bottom-0 max-h-[50px]
      justify-start items-start duration-200 hidden md:block ${
        isAtTop
          ? "bg-transparent border-transparent top-8"
          : "backdrop-blur border-b border-gray top-[0rem]"
      }
      `}
      >
        <nav className="max-w-[1155px] mx-auto w-full flex items-center">
          <div className="min-h-[40px] min-w-[40px] w-full h-full max-w-[40px] max-h-[40px] bg-black rounded-full"></div>
          <ul className="flex gap-5 p-0 m-0 list-none  py-3.5 ml-10 flex-1">
            <li className="p-0 m-0 text-base font-normal tracking-tight duration-200 text-neutral-700/60 hover:cursor-pointer hover:text-black/80">
              Features
            </li>
            <li className="p-0 m-0 text-base font-normal tracking-tight text-neutral-700/60 hover:cursor-pointer hover:text-black/80">
              Community
            </li>
            <li className="p-0 m-0 text-base font-normal tracking-tight text-neutral-700/60 hover:cursor-pointer hover:text-black/80">
              Contact
            </li>
          </ul>
          <div className="flex items-center justify-center h-full flex-2 mb-[5px]">
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
        className={`max-w-[100%] z-[1000] w-full mx-auto left-0 right-0 bottom-0 max-h-[50px]
      justify-start items-start duration-200 backdrop-blur  p-5 top-[0rem] flex md:hidden lg:hidden"
      `}
      >
        <div className="min-h-[40px] min-w-[40px] w-full h-full max-w-[40px] max-h-[40px] bg-black rounded-full relative" />
        <div className="flex items-end justify-end flex-1">
          <div className="px-1 py-0.5 flex items-center justify-center border border-transparent rounded-md hover:cursor-pointer hover:border-black/5 duration-150 hover:bg-black/5 text-neutral-700/60">
            <HiMenu
              size={25}
              onClick={() => setShow((p) => !p)}
            />
          </div>
        </div>

        {show && (
          <div className="absolute right-5 top-[5rem]">123</div>
        )}
      </div>
    </>
  );
}
