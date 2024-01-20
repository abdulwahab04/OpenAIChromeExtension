import React, { useEffect, useState } from "react";
import Generator from "./Components/Generator";
import Profile from "./Components/Profile";
import { ROUTES } from "./utils/route";
import { getData } from "./utils/localStorage";

export default function Home() {
  const [page, setPage] = useState();
  const [resume, setResume] = useState("Blank Resume");
  const [AIkey, setAIKey] = useState("Blank Key");

  useEffect(() => {
    const fetchData = async () => {
      const updatedResume = await getData("resume");
      const updatedKey = await getData("openAIKey");
      if (updatedResume) {
        setResume(updatedResume);
      }
      if (updatedKey) {
        setAIKey(updatedKey);
      }
    };
    fetchData();
  }, []);

  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} AIkey={AIkey} resume={resume} />;
    case ROUTES.PROFILE:
      return (
        <Profile
          setPage={setPage}
          resume={resume}
          setResume={setResume}
          AIkey={AIkey}
          setAIKey={setAIKey}
        />
      );
    default:
      return <Generator setPage={setPage} AIkey={AIkey} resume={resume} />;
  }
  // return <Generator />;
}
