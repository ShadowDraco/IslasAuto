import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HeaderFooterIcons from "./MainHeading/HeaderFooterIcons";

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        p: 4,
        my: 5,
        borderTop: "2px solid gray",
        borderBottom: "2px solid gray",
      }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <Stack>
          <Typography
            display={{ xs: "none", sm: "block" }}
            sx={{
              typography: { lg: "h4", md: "h5", sm: "h6", xs: "h6" },
              mb: 3,
            }}
          >
            Islas Auto Body - Your best choice for auto service
          </Typography>
          <Typography
            display={{ xs: "block", sm: "none" }}
            sx={{
              typography: { lg: "h4", md: "h5", sm: "h6", xs: "h6" },
              mb: 3,
              textAlign: "center",
            }}
          >
            Islas Auto Body - Your best choice for auto service
          </Typography>

          <Box
            display={{ xs: "block", sm: "none" }}
            sx={{
              textAlign: "center",
              borderTop: "2px solid gray",
              borderBottom: "2px solid gray",
            }}
          >
            <Typography my={2} variant="overline" fontSize="1em">
              300 S Sycamore Ave Building B, Rialto, CA 92376
            </Typography>
            <br></br>
            <br></br>
            <Typography variant="overline" my={5} fontSize="1em">
              Monday-Friday: 8:00AM-5:00PM <br></br>SAT 9:00AM-1:00PM <br></br>
              SUN: CLOSED
            </Typography>
          </Box>

          <Box display={{ xs: "none", sm: "block" }}>
            <Box sx={{ p: 1 }}>
              <Typography variant="overline">
                <Link
                  href="mailto:islasautobody@gmail.com"
                  target="blank"
                  style={{ color: "white" }}
                >
                  islasautobody@gmail.com <br></br>
                </Link>
              </Typography>
            </Box>

            <Box sx={{ p: 1 }}>
              <Typography variant="overline">
                <Link
                  href="tel:9513344192"
                  target="blank"
                  style={{ color: "white" }}
                >
                  (951) 334-4192
                </Link>
              </Typography>
            </Box>

            <Box sx={{ p: 1 }}>
              <Typography
                variant="overline"
                sx={{ mt: 5, mb: 2, textAlign: "center" }}
              >
                Web Services by{" "}
                <Link
                  target="_blank"
                  href="https://stormcodes.com"
                  style={{ color: "green" }}
                >
                  Ethan Storm
                </Link>
              </Typography>
            </Box>
          </Box>

          <Box
            display={{ xs: "block", sm: "none" }}
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <HeaderFooterIcons />
            </Box>

            <Box sx={{ p: 1 }}>
              <Typography
                variant="overline"
                sx={{ mt: 5, mb: 2, textAlign: "center" }}
              >
                Web Services by{" "}
                <Link
                  target="_blank"
                  href="https://stormcodes.com"
                  style={{ color: "green" }}
                >
                  Ethan Storm
                </Link>
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box display={{ xs: "none", sm: "block" }}>
          <Typography my={2} variant="overline" fontSize="1em">
            300 S Sycamore Ave Building B, Rialto, CA 92376
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="overline" my={5} fontSize="1em">
            Monday-Friday: 8:00AM-5:00PM <br></br>SAT 9:00AM-1:00PM <br></br>
            SUN: CLOSED
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
