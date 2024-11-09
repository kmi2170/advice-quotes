"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Box from "@mui/material/Box";

import { CardComponent } from "./card";

const queryClient = new QueryClient();

const CardWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardComponent />
      </Box>
    </QueryClientProvider>
  );
};

export default CardWrapper;
