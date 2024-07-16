import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { type TDirection } from "../lib/types";

type PaginationControlsProps = {
  handlePageChange: (direction: TDirection) => void;
  currentPage: number;
  totalNumberOfPages: number;
};

const PaginationControls = ({
  handlePageChange,
  currentPage,
  totalNumberOfPages,
}: PaginationControlsProps) => {
  return (
    <div className="flex h-[41px] w-full items-center justify-between border-t p-2 text-sm">
      {currentPage > 1 ? (
        <PaginationButton
          direction={"previous"}
          currentPage={currentPage}
          onClick={() => handlePageChange("previous")}
        />
      ) : (
        <div></div>
      )}

      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction={"next"}
          currentPage={currentPage}
          onClick={() => handlePageChange("next")}
        />
      )}
    </div>
  );
};
export default PaginationControls;

type PaginationButtonProps = {
  direction: TDirection;
  currentPage: number;
  onClick: () => void;
};

const PaginationButton = ({
  direction,
  currentPage,
  onClick,
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex h-fit items-center gap-1 rounded-xl bg-slate-100 px-2 py-1 text-xs text-slate-600 transition hover:bg-slate-200"
    >
      {direction === "next" && (
        <>
          Page {currentPage + 1}
          <ArrowRightIcon className="h-3 w-3" />
        </>
      )}
      {direction === "previous" && (
        <>
          <ArrowLeftIcon className="h-3 w-3" />
          Page {currentPage - 1}
        </>
      )}
    </button>
  );
};
