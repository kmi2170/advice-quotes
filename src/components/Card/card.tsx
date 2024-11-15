import { useQuery } from "@tanstack/react-query";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import CardContent from "./CardContent";
import GetAnotherButton from "./GetAnotherButton";
import { fetchAdviceSlip } from "../../api/lib/fetchAdvice";

export const CardComponent = () => {
  const { data, isFetching, isError, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdviceSlip,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
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
      <CardContent isFetching={isFetching} content={data} />
      <GetAnotherButton refetch={refetch} />
      {isError && (
        <Typography variant="h6" color="error">
          Fetching Data Failed. Please try again later.
        </Typography>
      )}
    </Card>
  );
};
