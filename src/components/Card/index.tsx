"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { useState } from "react";
import { API_NAMES, ApiNameType } from "../../api/types";
import { styled } from "@mui/material/styles";

const ButtonGroup = styled("div")({
  marginBottom: "2rem",
  width: "60%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const fetchFn = async (type: ApiNameType) => {
  const { data } = await axios.get(`/api?type=${type}`);
  return data;
};

const CardComponent = () => {
  const [apiName, setApiName] = useState<ApiNameType>(API_NAMES.ADVICE);

  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: [apiName, apiName],
    queryFn: () => fetchFn(apiName),
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
          onClick={() => setApiName(API_NAMES.ADVICE)}
          disabled={apiName === API_NAMES.ADVICE}
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
          onClick={() => setApiName(API_NAMES.QUOTES)}
          disabled={apiName === API_NAMES.QUOTES}
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
        <Title apiName={apiName} />

        <CardContent
          isFetching={isFetching}
          isError={isError}
          content={data as string}
          apiName={apiName}
        />
        <GetAnotherButton refetch={refetch} />
      </Card>
    </>
  );
};

export default CardComponent;

const Title = ({ apiName }: { apiName: ApiNameType }) => {
  const renderTitle = (type: ApiNameType) => {
    switch (type) {
      case API_NAMES.ADVICE:
        return "Advice";
      case API_NAMES.QUOTES:
        return "Quote";
    }
  };

  return (
    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
      {renderTitle(apiName)}
    </Typography>
  );
};
