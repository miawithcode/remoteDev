import { type TJob } from "../../lib/types";
import BookmarkIconButton from "../bookmark/BookmarkIconButton";
import useActiveIdContext from "../../hooks/useActiveIdContext";

type JobItemProps = {
  job: TJob;
};

const JobItem = ({ job }: JobItemProps) => {
  const { activeId } = useActiveIdContext();
  const isActive = activeId === job.id;

  return (
    <li
      className={`w-full cursor-pointer gap-3 border-b px-2 py-3 transition last:border-b-0 hover:bg-slate-50 ${isActive && "bg-slate-50"}`}
    >
      <a href={`#${job.id}`} className="flex w-full items-start gap-3">
        <div className="grid h-10 w-10 place-content-center rounded border border-black font-semibold">
          {job.badgeLetters}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm tracking-tight text-slate-800">{job.company}</p>
          <p className="text-sm text-slate-400">{job.daysAgo}d</p>
        </div>
        <div>
          <BookmarkIconButton id={job.id} />
        </div>
      </a>
    </li>
  );
};

export default JobItem;
