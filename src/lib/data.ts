import { BASE_API_URL } from "./constants";
import { TJobItem } from "./types";

// Fetching JobItem
type TJobItemAPIResponse = {
  public: boolean;
  jobItem: TJobItem;
};

export const fetchJobItem = async (
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
