import useActiveId from "./useActiveId";
import useJobItem from "./useJobItem";

const useActiveJobItem = () => {
  const activeId = useActiveId();
  const { jobItem, isLoading } = useJobItem(activeId);

  return { jobItem, isLoading } as const;
};
export default useActiveJobItem;
