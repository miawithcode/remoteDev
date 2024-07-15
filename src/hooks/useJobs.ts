import { TJob } from "../lib/types";
import { BASE_API_URL } from "../lib/constants";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../lib/utils";

type JobsAPIResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: TJob[];
};

// Fetching function
const fetchJobs = async (searchText: string): Promise<JobsAPIResponse> => {
  const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
  // 4xx or 5xx
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage.description);
  }

  const data = await response.json();
  return data;
};

const useJobs = (searchText: string) => {
  const { data, isInitialLoading } = useQuery(
    ["jobs", searchText],
    () => fetchJobs(searchText),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText), // Only fetch when there is a search text
      onError: handleError,
    },
  );

  return { jobs: data?.jobItems, isLoading: isInitialLoading } as const;
};

export default useJobs;
