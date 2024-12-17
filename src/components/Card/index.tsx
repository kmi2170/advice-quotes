"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "@mui/material/Card";

import Title from "../Title";
import CategoryButtons from "./CategoryButtons";
import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { API_NAMES, ApiNameType, DataResponseType } from "../../api/types";

const fetchFn = async (type: ApiNameType) => {
  const { data } = await axios.get<DataResponseType>(`/api?type=${type}`);
  return data;
};

const CardComponent = () => {
  const [api, setApi] = useState<ApiNameType>(API_NAMES.ADVICE);

  const { data, isFetching, isError, refetch } = useQuery<DataResponseType>({
    queryKey: [api, api],
    queryFn: () => fetchFn(api),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const handleChangeApi = (api: ApiNameType) => {
    setApi(api);
  };

  return (
    <>
      <CategoryButtons api={api} handleChangeApi={handleChangeApi} />
      <Card
        elevation={6}
        component="main"
        sx={{
          width: "80vw",
          maxWidth: "1024px",
          heigh: "50vh",
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
        <Title apiName={api} />

        <CardContent
          isFetching={isFetching}
          isError={isError}
          data={data}
          apiName={api}
        />
        <GetAnotherButton refetch={refetch} />
      </Card>
    </>
  );
};

export default CardComponent;
