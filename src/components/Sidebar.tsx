import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

const Sidebar = () => {
  return (
    <aside className="relative min-w-72 border-r border-slate-200">
      <div className="flex justify-between border-b border-slate-200 p-2 text-sm">
        <ResultsCount />
        <SortingControls />
      </div>
      <JobList />
      <PaginationControls />
    </aside>
  );
};
export default Sidebar;
