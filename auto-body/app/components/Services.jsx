import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Services() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.8)",
        p: 4,
        mt: 5,
        mb: "30%",
        borderTop: "2px solid gray",
        borderBottom: "2px solid gray",
      }}
    >
      <Typography
        sx={{
          typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
          textAlign: "center",
          mb: 3,
        }}
      >
        Great Service, and Great Optons
      </Typography>

      <Grid container justifyContent={"center"} gap={2}>
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
            border: "green 2px solid",
          }}
        >
          <Typography fontSize={"larger"}>
            All Insurance Claims Welcome
          </Typography>
        </Grid>

        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
            border: "green 2px solid",
          }}
        >
          <Typography fontSize={"larger"}>Financing Available</Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
          }}
        >
          <Typography fontSize={"larger"}>Deductible Assistance</Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
          }}
        >
          <Typography fontSize={"larger"}>Collision Repair</Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
          }}
        >
          <Typography fontSize={"larger"}>Paint Correction</Typography>
        </Grid>
        <Grid
          size={4}
          sx={{
            padding: 2,
            backgroundColor: "rgba(100,100,100,0.3)",
            borderRadius: 3,
          }}
        >
          <Typography fontSize={"larger"}>Fiberglass Repair</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
