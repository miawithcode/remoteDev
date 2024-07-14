import { useEffect, useState } from "react";
import { BASE_API_URL } from "../lib/constants";
import { TJobItem } from "../lib/types";

const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<TJobItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchJobItem = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItem(data.jobItem);
    };

    fetchJobItem();
  }, [id]);

  return { jobItem, isLoading };
};
export default useJobItem;
