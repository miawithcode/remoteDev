type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center py-16">
      <div className="w-full max-w-screen-lg px-8">{children}</div>
    </main>
  );
};
export default Main;
