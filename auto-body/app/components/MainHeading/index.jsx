import HeaderNav from "./HeaderNav";
import MainHeading from "./MainHeading";

import Box from "@mui/material/Box";
export default function MainHeadingBanner({ smallImage }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "top",
        justifyContent: "space-between",
        minWidth: "100%",
        backgroundColor: "black",
        borderBottom: "2px solid gray",
      }}
    >
      <MainHeading />
      <HeaderNav />
    </Box>
  );
}
