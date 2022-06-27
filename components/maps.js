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
      <div className="max-w-[970px] mt-5 px-0 w-100 mx-auto text-[12px]flex rounded flex justify-between items-center">
        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-neutral-200">
            Agent:
          </h1>
          <ul className="flex gap-2 ml-0">
            {agentData.map((agent, index) => (
              <span key={index}>
                {query.agent === agent ? (
                  <li
                    onClick={() => handleRemoveRouter(agent)}
                    className="text-[12px] bg-neutral-700 text-neutral-200 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(agent)}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ agent })}
                    className="text-[12px] bg-neutral-800 text-neutral-400 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-200 duration-200"
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(agent)}
                    </span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-neutral-200">
            Maps:
          </h1>
          <ul className="flex gap-2 ml-0">
            {mapData.map((map, index) => (
              <span key={index}>
                {query.map === map ? (
                  <li
                    onClick={() => handleRemoveRouter(map)}
                    className="text-[12px] bg-neutral-700 text-neutral-200 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(map)}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ map })}
                    className="text-[12px] bg-neutral-800 text-neutral-400 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-200 duration-200"
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(map)}
                    </span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-neutral-200">
            Side:
          </h1>
          <ul className="flex gap-2 ml-0">
            {sideData.map((side, index) => (
              <span key={index}>
                {query.side === side ? (
                  <li
                    onClick={() => handleRemoveRouter(side)}
                    className="text-[12px] bg-neutral-700 text-neutral-200 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(side)}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ side })}
                    className="text-[12px] bg-neutral-800 text-neutral-400 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-200 duration-200"
                  >
                    <span className="mt-[2px]">
                      {toUpperCase(side)}
                    </span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <ul className="flex gap-2 mt-[1rem] ml-0">
            <li
              onClick={() => router.push("/lessons")}
              className="text-[12px] bg-neutral-800 flex text-neutral-400 items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-neutral-700 hover:text-neutral-200 duration-200"
            >
              <span className="mt-[2px]">Reset</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
