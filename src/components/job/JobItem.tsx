import { BookmarkIcon } from "@radix-ui/react-icons";
import { TJob } from "../../lib/types";

type JobItemProps = {
  job: TJob;
};

const JobItem = ({ job }: JobItemProps) => {
  return (
    <li className="w-full cursor-pointer gap-3 border-b px-2 py-3 transition last:border-b-0 hover:bg-slate-100">
      <a href={`#${job.id}`} className="flex w-full items-start gap-3">
        <div className="grid h-10 w-10 place-content-center rounded-[4px] border border-black font-semibold">
          {job.badgeLetters}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm tracking-tight">{job.company}</p>
          <p className="text-sm text-slate-400">{job.daysAgo}d</p>
        </div>
        <div>
          <button>
            <BookmarkIcon />
          </button>
        </div>
      </a>
    </li>
  );
};

export default JobItem;
