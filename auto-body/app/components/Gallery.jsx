"use client";
import React from "react";
import Container from "@mui/material/Container";

import ImageGallery from "react-image-gallery";
import { beforeAfters } from "../../public/assets/images";
const beforeAftersItems = beforeAfters.map((image) => {
  return {
    original: image.src,
    thumbnail: image.src,
    alt: "A car worked on by Islas autobody!",
  };
});

export default function Gallery() {
  return (
    <Container
      sx={{
        my: 5,
        py: 5,
        borderTop: "2px solid gray",
        borderBottom: "2px solid gray",
      }}
    >
      <ImageGallery
        items={beforeAftersItems}
        lazyLoad
        autoPlay
        style={{ maxWidth: "75%" }}
      />
    </Container>
  );
}
