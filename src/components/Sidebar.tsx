import { type TSortBy, type TPageDirection, type TJob } from "../lib/types";
import JobList from "./job/JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  jobs: TJob[];
  isLoading: boolean;
  totalNumberOfResults: number;
  totalNumberOfPages: number;
  handlePageChange: (direction: TPageDirection) => void;
  currentPage: number;
  handleSortByChange: (newSortBy: TSortBy) => void;
  sortBy: TSortBy;
};

const Sidebar = ({
  jobs,
  isLoading,
  totalNumberOfResults,
  totalNumberOfPages,
  handlePageChange,
  currentPage,
  handleSortByChange,
  sortBy,
}: SidebarProps) => {
  return (
    <aside className="relative w-80 border-r border-slate-200">
      <div className="flex items-center justify-between border-b border-slate-200 p-2 text-sm">
        <ResultsCount totalNumberOfResults={totalNumberOfResults} />
        <SortingControls
          handleSortByChange={handleSortByChange}
          sortBy={sortBy}
        />
      </div>
      <JobList jobs={jobs} isLoading={isLoading} />
      <PaginationControls
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalNumberOfPages={totalNumberOfPages}
      />
    </aside>
  );
};
export default Sidebar;
