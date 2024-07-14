import { ClockIcon, MapPinIcon, WalletIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@radix-ui/react-icons";
import useActiveJobItem from "../hooks/useActiveJobItem";

const JobContent = () => {
  const jobItem = useActiveJobItem();

  if (!jobItem) return <EmptyJobContent />;

  return (
    <section className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <a
              href={jobItem.companyURL}
              className="grid h-14 w-14 place-content-center rounded-[4px] border border-black font-semibold hover:bg-slate-50"
            >
              {jobItem.badgeLetters}
            </a>
            <div>
              <h2 className="text-2xl font-semibold">{jobItem.title}</h2>
              <p className="tracking-tight">{jobItem.company}</p>
            </div>
          </div>
          <button className="p-2">
            <BookmarkIcon className="h-5 w-5" />
          </button>
        </div>

        <p className="text-slate-600">{jobItem.description}</p>
        <div className="flex gap-8 text-sm">
          <div className="flex items-center gap-1">
            <ClockIcon className="h-5 w-5 text-slate-600" />
            <p>{jobItem.duration}</p>
          </div>
          <div className="flex items-center gap-1">
            <WalletIcon className="h-5 w-5 text-slate-600" />
            <p>{jobItem.salary}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-5 w-5 text-slate-600" />
            <p>{jobItem.location}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="border-b py-1 text-lg font-semibold">Required Skills</h4>
        <ul className="flex flex-wrap gap-2">
          {jobItem.qualifications.map((qualification) => (
            <li className="inline-block text-nowrap rounded-[4px] border px-2 py-1 text-sm">
              {qualification}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="border-b py-1 text-lg font-semibold">Company Reviews</h4>
        <ul>
          {jobItem.reviews.map((review) => (
            <li className="list-inside list-disc">{review}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobContent;

const EmptyJobContent = () => {
  return (
    <section className="flex min-h-full flex-1 flex-col items-center justify-center gap-2">
      <h4 className="text-lg font-semibold text-slate-500">
        What are you looking for?
      </h4>
      <p className="max-w-72 text-balance text-center text-slate-500">
        Start by searching for any technology your ideal job is working with
      </p>
    </section>
  );
};
