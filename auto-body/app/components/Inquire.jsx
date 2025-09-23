import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CarPolishing1 from "/public/assets/owners/CarPolishing1.webp";
import CarPolishing2 from "/public/assets/owners/CarPolishing2.webp";
import GradientSpan from "./wrappers/GradientSpan";
import Image from "next/image";
import InquireForm from "./InquireForm";
import HeaderFooterIcons from "./MainHeading/HeaderFooterIcons";
import Container from "@mui/material/Container";
export default function Inquire() {
  return (
    <Container>
      <Box
        sx={{
          justifyContent: "space-between",
          backgroundColor: "rgba(0,0,0,0.3)",
          gap: 3,
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            my: 5,
          }}
        >
          <Box
            sx={{
              margin: "auto",
              backgroundColor: "rgba(0,0,0, 0.5)",
              p: 3,
            }}
          >
            {" "}
            <Typography
              sx={{
                typography: { lg: "h1", md: "h2", sm: "h2", xs: "h4" },
                mb: 3,
              }}
            >
              <GradientSpan color1="#00ff00" color2="#00aa00" color3="#aaffaa">
                Are You in Need of Repairs?
              </GradientSpan>
            </Typography>
            <Typography
              sx={{ typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" } }}
            >
              Please call or email us ASAP!
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HeaderFooterIcons larger />
            </Box>
          </Box>
        </Box>
        <InquireForm />
        <Box
          sx={{
            m: 4,
            display: "flex",
            justifyContent: "center",
            gap: 5,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
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
                typography: { lg: "h3", md: "h4", sm: "h4", xs: "h5" },
                mt: 5,
                textAlign: "center",
                display: { xs: "block", sm: "none" },
              }}
            >
              <GradientSpan color2="#ffffff" color1="#a0ff00" color3="#00ff0a">
                Why Choose Us?
              </GradientSpan>
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                mt: 4,
                typography: { lg: "h5", md: "h5", sm: "h6" },
              }}
            >
              We offer many services, like:
            </Typography>
            <Typography
              sx={{
                alignContent: "center",
                textAlign: "left",
                mt: 4,
                typography: { lg: "h5", md: "h5", sm: "h6" },
              }}
            >
              &emsp;🔴&ensp; All Claims Insurance<br></br>
              &emsp;🔴&ensp; Deductible Assistance <br></br>
              &emsp;🔴&ensp; Financing <br></br>
              &emsp;🔴&ensp; Collision Repair <br></br>
              &emsp;🔴&ensp; Paint Correction <br></br>
              &emsp;🔴&ensp; Fiberglass Repair <br></br>
              <br></br>
              <br></br> and we do so <strong>with open communication.</strong>{" "}
              We love what we do and <strong>we want to help YOU</strong>. We
              have such a high rating because we <strong>care</strong> and it is
              easy to tell.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            p: 3,
            maxWidth: "90%",
            overflow: "hidden",
            margin: "auto",
          }}
        >
          <Image
            src={CarPolishing1.src}
            width={500}
            height={600}
            alt="Before Work"
            layout="responsive"
          />
          <Image
            src={CarPolishing2.src}
            width={500}
            height={600}
            alt="After Work"
            layout="responsive"
          />
        </Box>
      </Box>
    </Container>
  );
}
