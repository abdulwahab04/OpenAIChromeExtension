import React from "react";
import { GoGear } from "react-icons/go";
import { ROUTES } from "../utils/route";

export default function Generator({ setPage }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-5 my-3 items-center">
        <h1 className="text-2xl font-bold">Generator Extension</h1>
        <button
          className="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]"
          onClick={() => setPage(ROUTES.PROFILE)}
        >
          <GoGear />
        </button>
      </div>
      <div className="flex mx-5">
        <textarea
          rows={12}
          className="w-full rounded-lg p-2 border border-black"
          placeholder="Generated Text"
        />
      </div>
      <button className="self-end mx-5 my-3 border-2 border-solid border-blue-500 text-blue-500 text-lg p-2 rounded-[5px]">
        Generate
      </button>
    </div>
  );
}
