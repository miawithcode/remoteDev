type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="relative flex max-h-screen w-full flex-col items-center">
      <div className="w-full max-w-screen-md flex-1 flex-grow px-8">
        {children}
      </div>
    </main>
  );
};
export default Main;
