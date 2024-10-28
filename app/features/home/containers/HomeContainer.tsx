import GalleryImages, {
  type Photo
} from '~/features/home/components/GalleryImages';
import { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import { Button } from '~/shared/components/atoms/button';

export default function HomeContainer() {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h1 className="font-display text-5xl">
        Data to <span className="text-neon-cyan">enrich2929</span> your online
        business
      </h1>

      <Button asChild>
        <Link to="/tailwind-intersect">Tailwind Intersect</Link>
      </Button>
      <Button asChild>
        <Link to="/not-found">NotFound</Link>
      </Button>
      <GalleryImages photos={photos} />
    </div>
  );
}
