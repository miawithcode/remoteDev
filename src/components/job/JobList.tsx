import { type TJob } from "../../lib/types";
import Loading from "../Loading";
import JobItem from "./JobItem";

type JobListProps = {
  jobs: TJob[];
  isLoading: boolean;
};

const JobList = ({ jobs, isLoading }: JobListProps) => {
  return (
    <ul>
      {isLoading && <Loading height="jobList" />}

      {!isLoading && jobs.map((job) => <JobItem key={job.id} job={job} />)}
    </ul>
  );
};
export default JobList;
