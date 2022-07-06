import { Router } from "next/router";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";

function toUpperCase(param) {
  return (
    param.charAt(0).toUpperCase() + param.slice(1).toLowerCase()
  );
}

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

function Dropdown(props) {
  const { query, handleRemoveRouter, handleRouter } = props;
  return (
    <div className="relative z-50 flex items-center">
      <button
        onClick={() =>
          props.setOpen(() => {
            props.title.toLowerCase() === props.open
              ? props.setOpen(false)
              : props.setOpen(props.title.toLowerCase());
          })
        }
        className="bg-gray-100 min-w-full  px-4 py-1 rounded-md text-[14px] leading-6 font-normal 
         text-neutral-700/80 hover:cursor-pointer flex
          focus:outline focus:outline-offset-0 
          hover:outline hover:outline-offset-0
          outline-gray-200 outline-2    items-center       min-h-[35px]
         "
      >
        <p className="flex-1 w-full p-0 m-0 text-base text-[13px] font-medium tracking-tight text-left text-black/80 ">
          {props.title}
        </p>
        <span className="ml-0 mr-[-4px] border-l border-gray-150">
          <RiArrowDropDownLine
            size={23}
            className="mr-[-4px] ml-2"
          />
        </span>
      </button>
      <ul
        className={`
          absolute p-2 m-0 list-none z-100
          top-[3.8rem]
          drop-shadow
          mx-auto
          left-0
          right-0
          flex flex-col items-start justify-center  
          w-full gap-1.5 border 
          border-gray 
          rounded-md overflow-hidden
          border-b border-gray-500
        bg-gray-800/80
          backdrop-blur
          ransition-all duration-200
    ${
      props.title.toLowerCase() === props.open
        ? "opacity-1 visible transform origin-top-right -translate-y-0"
        : "opacity-0 invisible transform origin-top-right -translate-y-1"
    }
        `}
      >
        {props.options.map((opt, index) => {
          return (
            <li
              onClick={() => {
                query[props.title.toLowerCase()] !== opt
                  ? handleRouter({
                      [props.title.toLowerCase()]: opt,
                    })
                  : handleRemoveRouter(opt);
              }}
              className="w-full flex items-center gap-2 transition-[background] hover:bg-gray-500/50 
              hover:cursor-pointer px-2 text-[14px] leading-5 font-normal text-gray-300 m-0 p-0 tracking-tight py-[3px] rounded-md"
              key={index}
            >
              <span
                className={`${
                  query[props.title.toLowerCase()] !== opt
                    ? "bg-gray-600"
                    : "bg-green-600"
                } min-h-[15px] min-w-[15px] bg-black/5 relative  rounded`}
              >
                {query[props.title.toLowerCase()] === opt && (
                  <div className="absolute pt-0 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <IoIosCheckmark
                      size={24}
                      className="text-white"
                    />
                  </div>
                )}
              </span>
              {toUpperCase(opt)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const Maps = ({
  handleRouter,
  handleRemoveRouter,
  router,
  amount,
}) => {
  const { query } = router;
  const [open, setOpen] = useState(false);

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
              <p className="text-[13px] tracking-normal font-medium leading-0 p-0 m-0 text-left duration-75 hover:text-black text-black/80 hover:cursor-pointer">
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
          {/* <button
            onClick={() => {
              router.push("/lessons");
              setOpen(false);
            }}
            className="absolute right-0 bg-gray-100 max-w-max flex justify-end items-end float-right px-3.5 py-1 rounded-md leading-6 font-normal 
             hover:cursor-pointer 
             flex-1 w-full p-0 m-0 text-base text-[13px] tracking-tight text-left text-black/80
           focus:outline focus:outline-offset-0 hover:outline hover:outline-offset-0
          outline-gray-200 outline-2    
          min-h-[33px]"
          >
            Reset
          </button> */}
        </div>
      </div>
    </>
  );
};
