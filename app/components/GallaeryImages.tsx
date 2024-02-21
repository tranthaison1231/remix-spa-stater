export interface Photo {
  id: string;
  url: string;
  title: string;
  thumbnailUrl: string;
}

interface GallaeryImagesProps {
  photos: Photo[];
}

export default function GallaeryImages({ photos }: GallaeryImagesProps) {
  return (
    <div>
      {photos.map((photo) => (
        <a href={photo.url} key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />{" "}
        </a>
      ))}
    </div>
  );
}
