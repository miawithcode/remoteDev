import { useEffect, useState } from "react";
import { TJob } from "../lib/types";
import { BASE_API_URL } from "../lib/constants";

const useJobs = (searchText: string) => {
  const [jobs, setJobs] = useState<TJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const totalNumberOfResults = jobs.length;
  const slicedJobs = jobs.slice(0, 6);

  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      setIsLoading(true);

      const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobs(data.jobItems);
    };

    fetchJobs();
  }, [searchText]);

  return [slicedJobs, isLoading, totalNumberOfResults] as const;
};

export default useJobs;
