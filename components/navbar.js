export function Navbar() {
  return (
    <div
      className="max-w-[1200px] flex z-[1000] w-full mx-auto mt-10 fixed top-0 left-0 right-0 bottom-0 max-h-[50px] rounded-full
      justify-start items-start
      "
    >
      <nav className="rounded-full bg-gray-400/10 max-w-[575px] w-full flex items-center">
        <div className="ml-2 min-h-[40px] min-w-[40px] w-full h-full max-w-[40px] max-h-[40px] bg-black rounded-full"></div>
        <ul className="flex gap-5 p-0 m-0 list-none  py-3.5 ml-5 flex-1">
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
        <div className="flex items-end justify-end mr-2 flex-2">
          <button
            className="px-6 py-2 bg-black rounded-full text-[14px] leading-6 font-normal text-white hover:cursor-pointer 
          hover:bg-black/80 duration-200
          
          "
          >
            Login Now
          </button>
        </div>
      </nav>
    </div>
  );
}
