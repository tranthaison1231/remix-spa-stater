import React from "react";
import { render, screen } from "@testing-library/react";
import GalleryImages, { type Photo } from "./GalleryImages";

const samplePhotos: Photo[] = [
  {
    id: "1",
    url: "https://example.com/photo1.jpg",
    title: "Photo 1",
    thumbnailUrl: "https://example.com/photo1_thumb.jpg",
  },
  {
    id: "2",
    url: "https://example.com/photo2.jpg",
    title: "Photo 2",
    thumbnailUrl: "https://example.com/photo2_thumb.jpg",
  },
];

describe("GalleryImages Component", () => {
  test("renders without crashing", () => {
    render(<GalleryImages photos={samplePhotos} />);
  });

  test("renders correct number of photos", () => {
    render(<GalleryImages photos={samplePhotos} />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(samplePhotos.length);
  });

  test("renders photos with correct attributes", () => {
    render(<GalleryImages photos={samplePhotos} />);
    for (const photo of samplePhotos) {
      const link = screen.getByRole("link", { name: photo.title });
      expect(link).toHaveAttribute("href", photo.url);

      const img = screen.getByAltText(photo.title);
      expect(img).toHaveAttribute("src", photo.thumbnailUrl);
    }
  });
});
