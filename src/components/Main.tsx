type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center">
      <div className="flex-1 flex-grow">{children}</div>
    </main>
  );
};
export default Main;
