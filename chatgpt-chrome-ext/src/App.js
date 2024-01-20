import React, { useState } from "react";
import Generator from "./Components/Generator";
import Profile from "./Components/Profile";
import { ROUTES } from "./utils/route";

export default function Home() {
  const [page, setPage] = useState();
  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} />;
    case ROUTES.PROFILE:
      return <Profile setPage={setPage} />;
    default:
      return <Generator setPage={setPage} />;
  }
  // return <Generator />;
}
