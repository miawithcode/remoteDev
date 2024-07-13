import useActiveId from "./useActiveId";
import useJobItem from "./useJobItem";

const useActiveJobItem = () => {
  const activeId = useActiveId();
  const jobItem = useJobItem(activeId);

  return jobItem;
};
export default useActiveJobItem;
