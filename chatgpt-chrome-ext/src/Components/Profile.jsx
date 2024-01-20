import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { ROUTES } from "../utils/route";

export default function Profile({ setPage }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-5 my-3 items-center">
        <h1 className="text-2xl font-bold">Profile</h1>
        <button
          className="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%]"
          onClick={() => setPage(ROUTES.GENERATOR)}
        >
          <FaArrowLeft />
        </button>
      </div>
      <form className="flex-col mx-5">
        <div className="flex-col mb-6">
          <label
            htmlFor="openAIKey"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your OpenAI Key
          </label>
          <input
            id="openAIKey"
            name="openAIKey"
            type="text"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2"
            placeholder="sk-....1234"
            required
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Resume
          </label>
          <textarea
            rows={8}
            id="resume"
            name="resume"
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg w-full p-2"
            placeholder="Paste your resume"
          />
        </div>
      </form>
      <button className="self-end mx-5 my-3 border-2 border-solid border-blue-500 text-blue-500 text-lg p-2 rounded-[5px]">
        Save
      </button>
    </div>
  );
}
