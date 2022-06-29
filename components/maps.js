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
      <div className="max-w-[1100px] w-100 mx-auto text-[10px] flex justify-between items-center border rounded-lg border-neutral-900 px-4 py-4 bg-neutral-900/60 ">
        <div className="max-w-max">
          <ul className="flex gap-2.5 mt-0 ml-0">
            {agentData.map((agent, index) => (
              <span key={index}>
                {query.agent === agent ? (
                  <li
                    onClick={() => handleRemoveRouter(agent)}
                    className="text-center text-[10px] text-white leading-4 mb-0     tracking-wider
                             bg-white/10  flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1  duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(agent)}</span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ agent })}
                    className="text-center text-[10px] text-white/60 leading-4  mb-0     tracking-wider
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 hover:bg-white/10 duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(agent)}</span>
                  </li>
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
                  <li
                    onClick={() => handleRemoveRouter(map)}
                    className="text-center text-[10px] text-white leading-4 mb-0     tracking-wider
                             bg-white/10  flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1  duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(map)}</span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ map })}
                    className="text-center                      
                            font-normal
                            tracking-wider
                            text-[10px] text-white/60 leading-4 mb-0
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 hover:bg-white/10 duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(map)}</span>
                  </li>
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
                  <li
                    onClick={() => handleRemoveRouter(side)}
                    className="text-center text-[10px] text-white leading-4 mb-0     tracking-wider
                             bg-white/10  flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1  duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(side)}</span>
                  </li>
                ) : (
                  <li
                    onClick={() => handleRouter({ side })}
                    className="text-center                      font-normal
                            tracking-wider mb-0
                            text-[10px] text-white/60 leading-4
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 hover:bg-white/10 duration-300 
                             hover:cursor-pointer"
                  >
                    <span>{toUpperCase(side)}</span>
                  </li>
                )}
              </span>
            ))}
          </ul>
        </div>

        <div className="max-w-max">
          <ul className="flex gap-2 mt-0 ml-0">
            <li
              onClick={() => router.push("/lessons")}
              className="text-center                      font-normal
                            tracking-wider mb-0
                            text-[10px] text-white/60 leading-4
                             bg-white/5 flex items-center justify-center max-w-fit px-2 py-0.5 rounded gap-1 hover:bg-white/10 duration-300 
                             hover:cursor-pointer"
            >
              <span>Reset</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
