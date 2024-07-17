import useJobsContext from "../hooks/useJobsContext";

const ResultsCount = () => {
  const { totalNumberOfResults } = useJobsContext();

  return (
    <div>
      <span className="font-semibold">{totalNumberOfResults}</span> results
    </div>
  );
};
export default ResultsCount;
