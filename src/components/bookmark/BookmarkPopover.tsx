import useBookmarkContext from "../../hooks/useBookmarkContext";
import JobList from "../job/JobList";

const BookmarkPopover = () => {
  const { bookmarkJobs, isLoading } = useBookmarkContext();

  return (
    <div className="absolute right-0 top-10 w-80 rounded border border-slate-200 bg-white shadow">
      {bookmarkJobs.length === 0 && !isLoading && (
        <div className="flex justify-center py-8">
          <p className="text-gray-400">No jobs saved yet...</p>
        </div>
      )}
      <JobList jobs={bookmarkJobs} isLoading={isLoading} />
    </div>
  );
};
export default BookmarkPopover;
