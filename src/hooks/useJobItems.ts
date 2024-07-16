import { useQueries } from "@tanstack/react-query";
import { handleError } from "../lib/utils";
import { fetchJobItem } from "../lib/data";

const useJobItems = (ids: number[]) => {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => jobItem !== undefined);
  //Other ways to filter out undefined values:
  // .filter((jobItem) => !!jobItem);
  // .filter((jobItem) => Boolean(jobItem));
  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading };
};
export default useJobItems;
