import GallaeryImages, { type Photo } from "~/components/GallaeryImages";
import { useEffect, useState } from "react";

export default function Index() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <GallaeryImages photos={photos} />
    </div>
  );
}
