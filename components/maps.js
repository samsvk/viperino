import { Router } from "next/router";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";

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
    <div className="relative z-50">
      <button
        onClick={() =>
          props.setOpen(() => {
            props.title.toLowerCase() === props.open
              ? props.setOpen(false)
              : props.setOpen(props.title.toLowerCase());
          })
        }
        className="bg-white drop-shadow-sm px-4 py-2 border border-gray rounded-full text-[14px] leading-6 font-normal 
        text-black hover:cursor-pointer duration-200 hover:bg-black/5 flex"
      >
        {props.title}
        <span className="ml-2">
          <RiArrowDropDownLine size={23} />
        </span>
      </button>
      {props.title.toLowerCase() === props.open && (
        <ul
          className="absolute p-2 m-0 list-none z-100
          top-[3rem]
          mx-auto
          left-1
          right-0
          flex flex-col items-start justify-center  w-[90%] min-w-[185px] max-w-[185px] gap-1.5 border border-gray rounded-md overflow-hidden
          backdrop-blur border-b border-gray
        bg-white
        "
        >
          {props.options.map((opt) => {
            return (
              <li
                onClick={() => {
                  query[props.title.toLowerCase()] !== opt
                    ? handleRouter({
                        [props.title.toLowerCase()]: opt,
                      })
                    : handleRemoveRouter(opt);
                }}
                className="w-full flex items-center gap-2 duration-150 hover:bg-black/5 hover:cursor-pointer px-3 text-[14px] leading-5 font-normal text-neutral-700/80 m-0 p-0 tracking-tight py-[3px] rounded-md"
                key={opt}
              >
                <span
                  className={`${
                    query[props.title.toLowerCase()] !== opt
                      ? "bg-black/5"
                      : "bg-green-200"
                  } min-h-[15px] min-w-[15px] bg-black/5 relative  rounded`}
                >
                  {query[props.title.toLowerCase()] === opt && (
                    <div className="absolute pt-0.5 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <IoIosCheckmark
                        size={24}
                        className="text-green-600"
                      />
                    </div>
                  )}
                </span>
                {toUpperCase(opt)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export const Maps = ({
  handleRouter,
  handleRemoveRouter,
  router,
}) => {
  const { query } = router;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex max-w-[1200px] mx-auto">
        <div className="flex-1">
          <button
            onClick={() => router.push("/lessons")}
            className="bg-white drop-shadow-sm px-4 py-2 border border-gray rounded-full text-[14px] leading-6 font-normal 
        text-black hover:cursor-pointer duration-200 hover:bg-black/5 flex"
          >
            Reset Filters
          </button>
        </div>
        <div className="flex-2 max-w-[700px] w-100 mx-auto text-[10px] flex justify-start gap-5 items-center">
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
