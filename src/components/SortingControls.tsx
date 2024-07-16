import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

type SortingControlsProps = {
  handleSortByChange: (newSortBy: "relevant" | "recent") => void;
  sortBy: "relevant" | "recent";
};

const SortingControls = ({
  handleSortByChange,
  sortBy,
}: SortingControlsProps) => {
  return (
    <div className="flex items-center">
      <ArrowsUpDownIcon className="mr-1 h-3 w-3" />
      <button
        onClick={() => handleSortByChange("relevant")}
        className={`rounded px-1 py-1 ${sortBy === "relevant" && "bg-slate-200"}`}
      >
        Relevant
      </button>
      <button
        onClick={() => handleSortByChange("recent")}
        className={`rounded px-2 py-1 ${sortBy === "recent" && "bg-slate-200"}`}
      >
        Recent
      </button>
    </div>
  );
};
export default SortingControls;
