import { useState, useEffect } from "react";

export function getWindow() {
  return typeof window !== "undefined" ? window : null;
}

export function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true);
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
    <div
      className={`max-w-[100%] px-6 flex z-[1000] w-full mx-auto fixed left-0 right-0 bottom-0 max-h-[50px]
      justify-start items-start duration-200

      	${
          isAtTop
            ? "bg-transparent border-transparent top-10"
            : "backdrop-blur top-[0.5rem]"
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
        <div className="flex items-end justify-end flex-2">
          <button
            className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer 
              hover:bg-black/80 duration-200"
          >
            Login Now
          </button>
        </div>
      </nav>
    </div>
  );
}
