import { TJob } from "../lib/types";
import JobList from "./job/JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  jobs: TJob[];
  isLoading: boolean;
};

const Sidebar = ({ jobs, isLoading }: SidebarProps) => {
  return (
    <aside className="relative w-80 border-r border-slate-200">
      <div className="flex justify-between border-b border-slate-200 p-2 text-sm">
        <ResultsCount />
        <SortingControls />
      </div>
      <JobList jobs={jobs} isLoading={isLoading} />
      <PaginationControls />
    </aside>
  );
};
export default Sidebar;
