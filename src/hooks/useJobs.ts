import { useEffect, useState } from "react";
import { TJob } from "../lib/types";
import { URL } from "../lib/constants";

const useJobs = (searchText: string) => {
  const [jobs, setJobs] = useState<TJob[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      setIsLoading(true);

      const response = await fetch(`${URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobs(data.jobItems);
    };

    fetchJobs();
  }, [searchText]);

  return { jobs, isLoading };
};

export default useJobs;
