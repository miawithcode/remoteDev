import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import { type TSortBy } from "../lib/types";

type SortingControlsProps = {
  handleSortByChange: (newSortBy: TSortBy) => void;
  sortBy: TSortBy;
};

const SortingControls = ({
  handleSortByChange,
  sortBy,
}: SortingControlsProps) => {
  return (
    <div className="flex items-center">
      <ArrowsUpDownIcon className="mr-1 h-3 w-3" />
      <SortingControlsButton
        onClick={() => handleSortByChange("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingControlsButton>
      <SortingControlsButton
        onClick={() => handleSortByChange("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingControlsButton>
    </div>
  );
};
export default SortingControls;

type SortingControlsButtonProps = {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
};

const SortingControlsButton = ({
  onClick,
  isActive,
  children,
}: SortingControlsButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-2 py-1 ${isActive && "bg-slate-200"}`}
    >
      {children}
    </button>
  );
};
