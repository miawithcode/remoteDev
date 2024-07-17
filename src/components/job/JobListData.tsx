import useJobsContext from "../../hooks/useJobsContext";
import JobList from "./JobList";

const JobListData = () => {
  const { sortedAndSlicedJobs, isLoading } = useJobsContext();

  return (
    <div>
      <JobList jobs={sortedAndSlicedJobs} isLoading={isLoading} />
    </div>
  );
};
export default JobListData;
