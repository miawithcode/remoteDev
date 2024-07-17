import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarkContextProvider from "./contexts/BookmarkContextProvider.tsx";
import ActiveIdContextProvider from "./contexts/ActiveIdContextProvider.tsx";
import SearchTextContextProvider from "./contexts/SearchTextContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarkContextProvider>
        <ActiveIdContextProvider>
          <SearchTextContextProvider>
            <App />
          </SearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarkContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
