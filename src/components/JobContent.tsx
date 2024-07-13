const JobContent = () => {
  return <EmptyJobContent />;

  return <section>JobContent</section>;
};

export default JobContent;

const EmptyJobContent = () => {
  return (
    <section className="flex min-h-full flex-1 flex-col items-center justify-center gap-2">
      <h4 className="text-lg font-semibold text-slate-500">
        What are you looking for?
      </h4>
      <p className="max-w-72 text-balance text-center text-slate-500">
        Start by searching for any technology your ideal job is working with
      </p>
    </section>
  );
};
