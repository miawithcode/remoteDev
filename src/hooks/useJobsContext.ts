import { useContext } from "react";
import { JobsContext } from "../contexts/JobsContextProvider";

const useJobsContext = () => {
  const context = useContext(JobsContext);
  if (!context) {
    throw new Error("useJobsContext must be used within a JobsContextProvider");
  }
  return context;
};
export default useJobsContext;
