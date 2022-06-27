import React from "react";

export const Table = () => {
  return (
    <div className="mt-3 mb-5">
      <h2 className="relative mb-0 text-2xl font-bold text-neutral-200 w-max">
        Table of Contents
      </h2>
      <ol>
        <li>
          <a
            href="#why-this-lineup"
            className="text-blue-400 duration-200 hover:cursor-pointer hover:text-blue-500"
          >
            {" "}
            Why this lineup?
          </a>
        </li>
        <li>
          <a
            href="#benefits"
            className="text-blue-400 duration-200 hover:cursor-pointer hover:text-blue-500"
          >
            Benefits
          </a>
        </li>
        <li>
          <a
            href="#limitations"
            className="text-blue-400 duration-200 hover:cursor-pointer hover:text-blue-500"
          >
            Limitations
          </a>
        </li>
        <li>
          <a
            href="#credits"
            className="text-blue-400 duration-200 hover:cursor-pointer hover:text-blue-500"
          >
            Credits
          </a>
        </li>
      </ol>
    </div>
  );
};
