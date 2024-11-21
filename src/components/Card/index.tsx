"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

import Title from "../Title";
import Buttons from "./Buttons";
import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import {
  API_CATEGORIES,
  API_NAMES,
  ApiCategoryType,
  ApiNameType,
} from "../../api/types";

const fetchFn = async (type: ApiNameType) => {
  const { data } = await axios.get(`/api?type=${type}`);
  return data;
};

const CardComponent = () => {
  const [category, setCategory] = useState<ApiCategoryType>(
    API_CATEGORIES.PRACTICAL
  );
  const [api, setApi] = useState<ApiNameType>(API_NAMES.ADVICE);

  console.log(api);
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: [api, api],
    queryFn: () => fetchFn(api),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const handleChangeCategory = (category: ApiCategoryType) => {
    setCategory(category);
    const newApi =
      category === API_CATEGORIES.PRACTICAL
        ? API_NAMES.ADVICE
        : API_NAMES.FORTUNE_COOKIE;
    setApi(newApi);
  };

  const handleChangeApi = (api: ApiNameType) => {
    setApi(api);
  };

  return (
    <>
      <Buttons
        category={category}
        api={api}
        handleChangeCategory={handleChangeCategory}
        handleChangeApi={handleChangeApi}
      />
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
        <Title apiName={api} />

        <CardContent
          isFetching={isFetching}
          isError={isError}
          content={data as string}
          apiName={api}
        />
        <GetAnotherButton refetch={refetch} />
      </Card>
    </>
  );
};

export default CardComponent;
