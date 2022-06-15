export const Maps = () => {
  return (
    <div className="max-w-[970px] py-5 px-0 w-100 mx-auto mt-20 text-[12px]flex rounded flex justify-between border-b border-gray-100">
      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Maps:
        </h1>
        <ul className="flex gap-2">
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Breeze</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Bind</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Fracture</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Ascent</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Haven</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Icebox</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Split</span>
          </li>
        </ul>
      </div>

      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Side:
        </h1>
        <ul className="flex gap-2">
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Attack</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Defence</span>
          </li>
        </ul>
      </div>

      <div className="max-w-max">
        <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
          Difficulty:
        </h1>
        <ul className="flex gap-2">
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Easy</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Medium</span>
          </li>
          <li className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200">
            <span className="mt-[2px]">Hard</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
