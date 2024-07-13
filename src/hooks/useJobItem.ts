import { useEffect, useState } from "react";
import { BASE_API_URL } from "../lib/constants";
import { TJobItem } from "../lib/types";

const useJobItem = (id: number | null) => {
  const [jobItem, setJobItem] = useState<TJobItem | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchJobItem = async () => {
      const response = await fetch(`${BASE_API_URL}/${id}`);
      const data = await response.json();
      setJobItem(data.jobItem);
    };

    fetchJobItem();
  }, [id]);

  return jobItem;
};
export default useJobItem;
