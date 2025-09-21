import React from "react";

import { HiChatAlt } from "react-icons/hi";
import { MdAccountBox } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { Box, IconButton, Typography } from "@mui/material";

import Link from "next/link";
export default function HeaderNav() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: 1,

        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <Box>
        {/* <Link href='/appointment'>
          <Typography color='white' fontWeight={'bold'}>
            Appointment
          </Typography>
        </Link>
        <Link href='/appointment'>
          <IconButton variant='outline' color='success' size='large'>
            <AiFillSchedule />
          </IconButton>
        </Link>
        
      */}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link href="/inquire">
          <Typography color="white" fontWeight={"bold"}>
            Inquire
          </Typography>
        </Link>
        <Link href="/inquire">
          <IconButton variant="outline" color="success" size="large">
            <HiChatAlt />
          </IconButton>
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link href="/about">
          <Typography
            color="white"
            fontWeight={"bold"}
            sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
          >
            About
          </Typography>
        </Link>
        <Link href="/about">
          <IconButton variant="outline" color="success" size="large">
            <MdAccountBox />
          </IconButton>
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {" "}
        <Link href="/gallery">
          <Typography
            color="white"
            fontWeight={"bold"}
            sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
          >
            Gallery
          </Typography>
        </Link>
        <Link href="/gallery">
          <IconButton variant="outline" color="success" size="large">
            <TfiGallery />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
