import { Router } from "next/router";

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
}) => {
  const { query } = router;

  function toUpperCase(param) {
    return (
      param.charAt(0).toUpperCase() +
      param.slice(1).toLowerCase()
    );
  }
  // bg-neutral-800;

  return (
    <>
      <div className="max-w-[1200px] w-100 mx-auto text-[10px] flex justify-between items-center">
        <div className="max-w-max">
          <ul className="flex gap-2.5 mt-0 ml-0">
            {agentData.map((agent, index) => (
              <span key={index}>
                {query.agent === agent ? (
                  <div
                    onClick={() => handleRemoveRouter(agent)}
                    className="bg-gray-400/5 flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray 
                    rounded-md overflow-hidden relative hover:cursor-pointer"
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(agent)}
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => handleRouter({ agent })}
                    className="flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray rounded-md overflow-hidden relative
                    hover:cursor-pointer hover:bg-gray-400/5
                    "
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(agent)}
                    </p>
                  </div>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <ul className="flex gap-2.5 mt-0 ml-0">
            {mapData.map((map, index) => (
              <span key={index}>
                {query.map === map ? (
                  <div
                    onClick={() => handleRemoveRouter(map)}
                    className="bg-gray-400/5 flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray 
                    rounded-md overflow-hidden relative hover:cursor-pointer"
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(map)}
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => handleRouter({ map })}
                    className="flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray rounded-md overflow-hidden relative
                    hover:cursor-pointer hover:bg-gray-400/5
                    "
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(map)}
                    </p>
                  </div>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <ul className="flex gap-2.5 mt-0 ml-0">
            {sideData.map((side, index) => (
              <span key={index}>
                {query.side === side ? (
                  <div
                    onClick={() => handleRemoveRouter(side)}
                    className="bg-gray-400/5 flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray 
                    rounded-md overflow-hidden relative hover:cursor-pointer"
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(side)}
                    </p>
                  </div>
                ) : (
                  <div
                    onClick={() => handleRouter({ side })}
                    className="flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray rounded-md overflow-hidden relative
                    hover:cursor-pointer hover:bg-gray-400/5
                    "
                  >
                    <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                      {toUpperCase(side)}
                    </p>
                  </div>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <ul className="flex gap-2 mt-0 ml-0">
            <div
              onClick={() => router.push("/lessons")}
              className="flex flex-col items-center justify-center gap-1.5 px-2 py-1 border border-gray rounded-md overflow-hidden relative
                    hover:cursor-pointer hover:bg-gray-400/5
                    "
            >
              <p className="text-[14px] text-center leading-0 font-normal text-neutral-700/80 m-0 p-0 tracking-tight">
                Reset
              </p>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
