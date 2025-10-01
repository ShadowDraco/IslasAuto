import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GradientSpan from "./wrappers/GradientSpan";
import Link from "next/link";
import Image from "next/image";
import SnapFinance from "/public/assets/main/SnapFinance.webp";
import BothJulios from "/public/assets/owners/BothJulios.webp";

export default function WhoAreWe({ noButton }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(0,0,0,0.3)",
        p: 3,
        my: 5,
        mb: "30%",
        borderTop: "2px solid gray",
        borderBottom: "2px solid gray",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Typography
          sx={{
            typography: { lg: "h1", md: "h2", sm: "h2", xs: "h4" },
            mb: 3,
            display: { xs: "none", sm: "block" },
          }}
        >
          <GradientSpan color1="#ffffff" color2="#a0ff00" color3="#00ff0a">
            Who are we?
          </GradientSpan>
        </Typography>

        {!noButton && (
          <Box>
            <Link href="/about">
              <Button variant="contained" color="success" size="large">
                About Us
              </Button>
            </Link>
          </Box>
        )}
      </Box>

      <Typography
        sx={{
          typography: { lg: "h1", md: "h2", sm: "h2", xs: "h4" },
          mb: 3,
          display: { xs: "block", sm: "none" },
          textAlign: "center",
        }}
      >
        <GradientSpan color1="#ffffff" color2="#a0ff00" color3="#00ff0a">
          Who are we?
        </GradientSpan>
      </Typography>

      <Box sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Typography
          sx={{
            py: 5,
            typography: { lg: "h4", md: "h4" },
            textAlign: "center",
          }}
        >
          {" "}
          This is Islas Auto Body! We are a <strong>family</strong> owned
          business operating in Rialto California, serving car enthusiasts and
          handling insurance claims from all over California. We focus on{" "}
          <strong>quality</strong> and do not cut corners like high production
          shops.
        </Typography>
        <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
          <Image
            src={BothJulios.src}
            width={BothJulios.width}
            height={BothJulios.height}
            layout="responsive"
            //alt='Julio and Julio, owners of Islas Auto Body'
            alt="Finishing touches on a fixed car"
            style={{ maxWidth: 700, margin: "auto" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            display: { xs: "none", sm: "flex" },
            my: 5,
          }}
        >
          {!noButton && (
            <Box>
              <Link
                href="https://snapf.in/LuEflE1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" color="success" size="large" mb="5">
                  Sign up now!
                </Button>
              </Link>
            </Box>
          )}

          <Typography
            sx={{
              typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
              mb: 3,
              display: { xs: "none", sm: "block" },
            }}
          >
            <GradientSpan color1="#ffffff" color2="#a0ff00" color3="#00ff0a">
              Need Financing?
            </GradientSpan>
          </Typography>
        </Box>

        <Typography
          sx={{
            typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
            mb: 3,
            display: { xs: "block", sm: "none" },
            textAlign: "center",
          }}
        >
          <GradientSpan color1="#ffffff" color2="#a0ff00" color3="#00ff0a">
            Need Financing?
          </GradientSpan>
        </Typography>

        <Box
          sx={{
            my: 3,
            width: "100%",
            margin: "auto",
            ":hover": { backgroundColor: "white", transition: "0.3s ease" },
          }}
        >
          <Link
            href="https://snapf.in/LuEflE1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={SnapFinance.width}
              height={SnapFinance.height}
              blurDataURL={SnapFinance.blurDataURL}
              src={SnapFinance.src}
              alt="Snap Finance - Apply Here"
              style={{ boxShadow: "4px 2px 6px #010101", border: "none" }}
              layout="responsive"
            />
          </Link>
        </Box>

        <Typography
          sx={{
            typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
            mt: 5,
            display: { xs: "block", sm: "none" },
            textAlign: "center",
          }}
        >
          <GradientSpan color2="#ffffff" color1="#a0ff00" color3="#00ff0a">
            Why Choose Us?
          </GradientSpan>
        </Typography>
        <Typography
          sx={{
            typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
            mt: 5,
            display: { xs: "none", sm: "block" },
          }}
        >
          <GradientSpan color2="#ffffff" color1="#a0ff00" color3="#00ff0a">
            Why Choose Us?
          </GradientSpan>
        </Typography>
        <Typography
          sx={{
            mt: 4,
            typography: { lg: "h5", md: "h6" },
            textAlign: "center",
            py: 3,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          Islas Auto body is not a production body shop. We are a quality body
          shop that pays extra <strong>attention</strong> to every little detail
          & always takes an extra step for customer satisfaction.{" "}
        </Typography>
      </Box>
    </Box>
  );
}
