"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { useState } from "react";
import { ApiType } from "../../api/types";
import { styled } from "@mui/material/styles";

const ButtonGroup = styled("div")({
  marginBottom: "2rem",
  width: "60%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const fetchFn = async (type: ApiType) => {
  const { data } = await axios.get(`/api?type=${type}`);

  return data;
};

const CardComponent = () => {
  const [apiType, setApiType] = useState<ApiType>("quote");

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: [apiType, apiType],
    queryFn: () => fetchFn(apiType),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <ButtonGroup>
        <Button
          variant="contained"
          size="large"
          onClick={() => setApiType("advice")}
          disabled={apiType === "advice"}
          sx={{
            "&:disabled": {
              color: "white",
              backgroundColor: "grey",
            },
          }}
        >
          Advice
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => setApiType("quote")}
          disabled={apiType === "quote"}
          sx={{
            "&:disabled": {
              color: "white",
              backgroundColor: "grey",
            },
          }}
        >
          Quote
        </Button>
      </ButtonGroup>
      <Card
        elevation={6}
        component="main"
        sx={{
          width: "80vw",
          maxWidth: "1024px",
          minHeight: "50vh",
          pl: "1rem",
          pr: "1rem",
          pt: "1.5rem",
          pb: "1.5rem",
          borderRadius: "1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          backgroundImage:
            "linear-gradient(to bottom, rgb(255,255,255,1.0),rgba(255,255,255,0.0))",
        }}
      >
        <CardContent isFetching={isFetching} content={data} apiType={apiType} />
        <GetAnotherButton refetch={refetch} />
        {isError && (
          <Typography variant="h6" color="error">
            Fetching Data Failed. Please try again later.
          </Typography>
        )}
      </Card>
    </>
  );
};

export default CardComponent;
