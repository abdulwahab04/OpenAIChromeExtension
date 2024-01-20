import React, { useEffect } from "react";
import { GoGear } from "react-icons/go";
import { ROUTES } from "../utils/route";
import { getData } from "../utils/localStorage";
import { chatGPTMessage } from "../utils/gptGenerate";

export default function Generator({ setPage, AIkey, resume }) {
  const [jobPosting, setJobPosting] = React.useState("");
  const [coverLetter, setCoverLetter] = React.useState("");

  useEffect(() => {
    const getJobPosting = async () => {
      const jobDescription = await getData("jobDescription");
      if (jobDescription) {
        setJobPosting(jobDescription);
      }
    };
    getJobPosting();
  }, []);

  // console.log(jobPosting);

  const handleGeneration = async () => {
    try {
      const message = `Generate a cover letter for the following job posting: ${jobPosting} \n Use the following resume: ${resume}`;
      const response = await chatGPTMessage(message, AIkey);
      setCoverLetter(response);
    } catch (error) {
      console.log(error);
    }
  };

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
          value={coverLetter}
        ></textarea>
      </div>
      <button
        className="self-end mx-5 my-3 border-2 border-solid border-blue-500 text-blue-500 text-lg p-2 rounded-[5px]"
        onClick={() => handleGeneration()}
      >
        Generate
      </button>
    </div>
  );
}
