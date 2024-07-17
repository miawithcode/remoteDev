import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";
import useJobsContext from "../hooks/useJobsContext";

const SortingControls = () => {
  const { handleChangeSortBy, sortBy } = useJobsContext();

  return (
    <div className="flex items-center">
      <ArrowsUpDownIcon className="mr-1 h-3 w-3" />
      <SortingControlsButton
        onClick={() => handleChangeSortBy("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingControlsButton>
      <SortingControlsButton
        onClick={() => handleChangeSortBy("recent")}
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
