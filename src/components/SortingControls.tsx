import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

const SortingControls = () => {
  return (
    <div className="flex items-center">
      <ArrowsUpDownIcon className="mr-1 h-3 w-3" />
      <button className="rounded px-1 py-1 hover:bg-slate-200">Relevant</button>
      <button className="rounded px-2 py-1 hover:bg-slate-200">Recent</button>
    </div>
  );
};
export default SortingControls;
