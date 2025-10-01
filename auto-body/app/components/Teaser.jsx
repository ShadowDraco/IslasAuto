import React from "react";

import { Box, Typography } from "@mui/material";
import GradientSpan from "./wrappers/GradientSpan";
import Image from "next/image";
import Link from "next/link";

import Charger1 from "../../public/assets/owners/Charger1.webp";
import Charger2 from "../../public/assets/owners/Charger2.webp";

export default function Teaser() {
  return (
    <Box sx={{ py: 5, backgroundColor: "rgba(0,0,0,0.7)" }}>
      <Link
        href="/gallery"
        target="_blank"
        style={{
          textDecoration: "none",
          padding: 4,
        }}
      >
        <Typography
          sx={{
            typography: { lg: "h1", md: "h2", sm: "h2", xs: "h4" },
            mb: 3,
          }}
        >
          <GradientSpan color1="#aaffaa" color2="#aaff00" color3="#ffffff">
            Want to See More?
          </GradientSpan>
        </Typography>
      </Link>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          p: 3,

          overflow: "hidden",
          margin: "auto",
        }}
      >
        <Box>
          <Link
            href="/gallery"
            target="_blank"
            style={{
              textDecoration: "none",
              padding: 4,
            }}
          >
            <Image
              src={Charger1.src}
              alt="Before Work"
              width={500}
              height={700}
              layout="responsive"
            />
          </Link>
        </Box>

        <Box>
          <Link
            href="/gallery"
            target="_blank"
            style={{
              textDecoration: "none",
              padding: 4,
            }}
          >
            <Image
              src={Charger2.src}
              width={500}
              height={700}
              alt="After Work"
              layout="responsive"
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
