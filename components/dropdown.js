import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosCheckmark } from "react-icons/io";

function toUpperCase(param) {
  return (
    param.charAt(0).toUpperCase() + param.slice(1).toLowerCase()
  );
}

export function Dropdown(props) {
  const { query, handleRemoveRouter, handleRouter } = props;
  return (
    <div className="relative flex items-center">
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
          outline-gray-200 outline-2 items-center       min-h-[35px]
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
          z-[3000]
          right-0
          flex flex-col items-start justify-center  
          w-full gap-1.5 border 
          border-gray 
          rounded-md overflow-hidden
          border-b border-gray-500
        bg-gray-800/80
          backdrop-blur
          transition-all duration-200
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
                    ? "bg-gray-500"
                    : "bg-green-300"
                } min-h-[15px] min-w-[15px] relative  rounded`}
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
