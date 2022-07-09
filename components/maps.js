import { Router } from "next/router";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { useWindowScroll } from "./useWindowScroll";
import { IoDocumentTextSharp } from "react-icons/io5";
import { Dropdown } from "./dropdown";

const mapData = [
  "breeze",
  "bind",
  "fracture",
  "ascent",
  "haven",
  "icebox",
  "pearl",
];
const sideData = ["attack", "defence"];
const agentData = ["viper", "cypher", "sova"];

export const Maps = ({
  handleRouter,
  handleRemoveRouter,
  router,
  amount,
}) => {
  const { query } = router;
  const [open, setOpen] = useState(false);
  const isAtTop = useWindowScroll();

  return (
    <>
      <div className="flex max-w-[1100px] mx-auto items-center mb-8">
        <div className="relative mt-10 grid max-w-[1100px] mx-auto w-full grid-cols-4 gap-5">
          <div className="flex flex-row w-full max-w-max">
            <div
              className="min-h-[54px] min-w-[54px] max-w-[54px] max-h-[54px] w-full h-full  rounded-full
              backdrop-blur bg-gray-100 flex items-center justify-center"
            >
              <IoDocumentTextSharp
                size={30}
                className="mb-[3px] text-neutral-700/60"
              />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <h1 className="text-[22px] font-semibold tracking-tight text-black text-left">
                Guides
              </h1>
              <p className="text-[13px] tracking-normal font-medium leading-none p-0 m-0 text-left duration-75 text-black/80 mt-0.5">
                {amount} Available
              </p>
            </div>
          </div>
          <Dropdown
            options={mapData}
            title={"Map"}
            query={query}
            handleRouter={handleRouter}
            handleRemoveRouter={handleRemoveRouter}
            setOpen={setOpen}
            open={open}
          />

          <Dropdown
            options={agentData}
            title={"Agent"}
            query={query}
            handleRouter={handleRouter}
            handleRemoveRouter={handleRemoveRouter}
            setOpen={setOpen}
            open={open}
          />

          <Dropdown
            options={sideData}
            title={"Side"}
            query={query}
            handleRouter={handleRouter}
            handleRemoveRouter={handleRemoveRouter}
            setOpen={setOpen}
            open={open}
          />
        </div>
      </div>
    </>
  );
};
