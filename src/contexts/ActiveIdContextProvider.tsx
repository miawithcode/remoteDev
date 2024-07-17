import { createContext } from "react";
import useActiveId from "../hooks/useActiveId";

export const ActiveIdContext = createContext<TActiveIdContext | null>(null);

type ActiveIdContextProviderProps = {
  children: React.ReactNode;
};

type TActiveIdContext = {
  activeId: number | null;
};

const ActiveIdContextProvider = ({
  children,
}: ActiveIdContextProviderProps) => {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>
  );
};
export default ActiveIdContextProvider;
