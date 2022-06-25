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
  return (
    <>
      <div className="max-w-[970px] py-5 px-0 w-100 mx-auto text-[12px]flex rounded flex justify-between border-b border-gray-100 items-center mt-10">
        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Agent:
          </h1>
          <ul className="flex gap-2 ml-0">
            {agentData.map((agent, index) => (
              <span key={index}>
                {query.agent === agent ? (
                  <li
                    onClick={() => handleRemoveRouter(agent)}
                    className="text-[12px] bg-slate-200 text-slate-50 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {agent.charAt(0).toUpperCase() +
                        agent.slice(1).toLowerCase()}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ agent })}
                    className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
                  >
                    <span className="mt-[2px]">
                      {agent.charAt(0).toUpperCase() +
                        agent.slice(1).toLowerCase()}
                    </span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Maps:
          </h1>
          <ul className="flex gap-2 ml-0">
            {mapData.map((map, index) => (
              <span key={index}>
                {query.map === map ? (
                  <li
                    onClick={() => handleRemoveRouter(map)}
                    className="text-[12px] bg-slate-200 text-slate-50 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {map.charAt(0).toUpperCase() +
                        map.slice(1).toLowerCase()}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ map })}
                    className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
                  >
                    <span className="mt-[2px]">
                      {map.charAt(0).toUpperCase() +
                        map.slice(1).toLowerCase()}
                    </span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <h1 className="text-[14px] font-semibold tracking-wide text-gray-800">
            Side:
          </h1>
          <ul className="flex gap-2 ml-0">
            {sideData.map((side, index) => (
              <span key={index}>
                {query.side === side ? (
                  <li
                    onClick={() => handleRemoveRouter(side)}
                    className="text-[12px] bg-slate-200 text-slate-50 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer "
                  >
                    <span className="mt-[2px]">
                      {side.charAt(0).toUpperCase() +
                        side.slice(1).toLowerCase()}
                    </span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ side })}
                    className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
                  >
                    <span className="mt-[2px]">
                      {side.charAt(0).toUpperCase() +
                        side.slice(1).toLowerCase()}
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
              className="text-[12px] bg-gray-100 flex items-center justify-center max-w-fit px-2 rounded gap-1  hover:cursor-pointer hover:bg-slate-200 hover:text-slate-50 duration-200"
            >
              <span className="mt-[2px]">Reset</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
