import GallaeryImages, { type Photo } from "~/components/GallaeryImages";
import { useEffect, useState } from "react";
import Button from "~/components/Button";

export default function Index() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div className="bg-red-500">
      <Button />
      <GallaeryImages photos={photos} />
    </div>
  );
}
