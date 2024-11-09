"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { Provider } from "react-redux";
import { store } from "../../store/store";
import { CardComponent } from "./card";

const CardWrapper = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CardComponent />
      </QueryClientProvider>
    </Provider>
  );
};

export default CardWrapper;
