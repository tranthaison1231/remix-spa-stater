export interface Photo {
  id: string;
  url: string;
  title: string;
  thumbnailUrl: string;
}

interface GalleryImagesProps {
  photos: Photo[];
}

export default function GalleryImages({ photos }: GalleryImagesProps) {
  return (
    <div>
      {photos.map((photo) => (
        <a href={photo.url} key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />{' '}
        </a>
      ))}
    </div>
  );
}
