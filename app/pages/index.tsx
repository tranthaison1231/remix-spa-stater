import GalleryImages, { type Photo } from "~/components/GalleryImages";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

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
				Data to <span className="text-neon-cyan">enrich2929</span> your online
				business
			</h1>
			<Link to="/tailwind-intersect">
				<Button>Tailwind Intersect</Button>
			</Link>
			<Link to="/not-found">
				<Button>NotFound</Button>
			</Link>
			<GalleryImages photos={photos} />
		</div>
	);
}
