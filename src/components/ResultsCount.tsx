type ResultsCountProps = {
  totalNumberOfResults: number;
};

const ResultsCount = ({ totalNumberOfResults }: ResultsCountProps) => {
  return (
    <div>
      <span className="font-semibold">{totalNumberOfResults}</span> results
    </div>
  );
};
export default ResultsCount;
