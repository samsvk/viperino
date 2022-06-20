import Router, { useRouter } from "next/router";
const mapData = [
  "breeze",
  "bind",
  "fracture",
  "ascent",
  "haven",
  "icebox",
  "split",
];

const sideData = ["attack", "defence"];

export const Maps = ({ handleRouter }) => {
  const router = useRouter();
  return (
    <div className="max-w-[970px] py-5 px-0 w-100 mx-auto mt-20 text-[12px]flex rounded flex justify-between border-b border-gray-100">
      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Maps:
        </h1>
        <ul className="flex gap-2 ml-0">
          {mapData.map((map, index) => (
            <li
              onClick={() => handleRouter({ map })}
              className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
            >
              <span className="mt-[2px]" key={index}>
                {map.charAt(0).toUpperCase() +
                  map.slice(1).toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Side:
        </h1>
        <ul className="flex gap-2 ml-0">
          {sideData.map((side, index) => (
            <li
              onClick={() => handleRouter({ side })}
              className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
            >
              <span className="mt-[2px]" key={index}>
                {side.charAt(0).toUpperCase() +
                  side.slice(1).toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Reset all Filters:
        </h1>
        <ul className="flex gap-2 ml-0">
          <li
            onClick={() => Router.push("/viper")}
            className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
          >
            <span className="mt-[2px]">Reset</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
