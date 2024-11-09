"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CardComponent } from "./card";

const queryClient = new QueryClient();

const CardWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CardComponent />
    </QueryClientProvider>
  );
};

export default CardWrapper;
