import { TJob } from "../../lib/types";
import JobItem from "./JobItem";

type JobListProps = {
  jobs: TJob[];
};

const JobList = ({ jobs }: JobListProps) => {
  return (
    <ul className="min-h-[50vh]">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};
export default JobList;
