import { BASE_API_URL } from "../lib/constants";
import { type TJobItem } from "../lib/types";
import { useQuery } from "@tanstack/react-query";
import { handleError } from "../lib/utils";

type TJobItemAPIResponse = {
  public: boolean;
  jobItem: TJobItem;
};

// Fetching function
const fetchJobItem = async (
  id: number | null,
): Promise<TJobItemAPIResponse> => {
  const response = await fetch(`${BASE_API_URL}/${id}`);
  // 4xx or 5xx, means something wrong on the server,
  // so the browser won't throw an error,
  // so we do it ourselves
  if (!response.ok) {
    const errorMessage = await response.json();
    throw new Error(errorMessage.description);
  }

  const data = await response.json();
  return data;
};

const useJobItem = (id: number | null) => {
  // const [jobItem, setJobItem] = useState<TJobItem | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   if (!id) return;
  //   const fetchJobItem = async () => {
  //     setIsLoading(true);
  //     const response = await fetch(`${BASE_API_URL}/${id}`);
  //     const data = await response.json();
  //     setIsLoading(false);
  //     setJobItem(data.jobItem);
  //   };
  //   fetchJobItem();
  // }, [id]);
  // return { jobItem, isLoading } as const;

  const { data, isInitialLoading } = useQuery(
    ["job-item", id],
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    },
  );

  return { jobItem: data?.jobItem, isLoading: isInitialLoading } as const;
};
export default useJobItem;
