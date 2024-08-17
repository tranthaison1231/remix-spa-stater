import GalleryImages, { type Photo } from "~/components/GalleryImages";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

export default function Index() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1 className="font-display text-5xl">
        Data to <span className="text-neon-cyan">enrich</span> your online
        business
      </h1>
      <Button> Hello </Button>
      <GalleryImages photos={photos} />
    </div>
  );
}
