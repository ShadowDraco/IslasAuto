import React from "react";
import Image from "next/image";
import IABBANNER from "/public/assets/logos/LogoRectangle.webp";
import Box from "@mui/material/Box";
export default function MainHeadingImage({ smallImage }) {
  return (
    <Box sx={{ width: "100%", mb: 0, pb: 0, borderBottom: "2px solid gray" }}>
      <Image
        src={IABBANNER}
        width={IABBANNER.width}
        height={IABBANNER.height}
        alt="Islas Auto Body Banner"
        layout="responsive"
      />
    </Box>
  );
}
