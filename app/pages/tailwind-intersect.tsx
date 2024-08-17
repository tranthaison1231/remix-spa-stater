export default function TailwindIntersect() {
  return (
    <div className="bg-white p-8 lg:p-12 lg:text-lg">
      <div className="max-w-3xl mx-auto overflow-clip">
        <h1 className="text-3xl mb-2">Example „Image Cards”</h1>
        <h2 className="text-xl mb-12 lg:mb-16">
          <a href="https://github.com/heidkaemper/tailwindcss-intersect">
            Tailwind CSS Intersection Plugin
          </a>
        </h2>
        <p className="my-8 lg:my-12">
          Scroll down and the images on this page will be animated.
          <br />
          If the images are already in the viewport when the page is loaded,
          there will be no animation. Therefore, the performance and loading
          time of the page will not be affected.
        </p>
        <p className="my-8 lg:my-12 text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi.
        </p>
        <p className="my-8 lg:my-12 text-gray-500">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <p className="my-8 lg:my-12 text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
            <img
              src="https://picsum.photos/400?random=1"
              className="w-full h-96 object-cover bg-slate-300 rounded"
              alt="test"
            />
          </div>
          <div className="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700 lg:delay-200">
            <img
              src="https://picsum.photos/400?random=2"
              className="w-full h-96 object-cover bg-slate-300 rounded"
              alt="test"
            />
          </div>
          <div className="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700">
            <img
              src="https://picsum.photos/400?random=3"
              className="w-full h-96 object-cover bg-slate-300 rounded"
              alt="test"
            />
          </div>
          <div className="scale-50 opacity-0 intersect:scale-100 intersect:opacity-100 transition duration-700 lg:delay-200">
            <img
              src="https://picsum.photos/400?random=4"
              className="w-full h-96 object-cover bg-slate-300 rounded"
              alt="test"
            />
          </div>
        </div>
        <small
          className="block text-xs leading-none bg-gray-200 rounded font-mono p-2 my-4 cursor-help opacity-0 intersect:opacity-100 transition duration-1000 intersect-once"
          title="Classes used in the example above"
        >
          scale-50 opacity-0 intersect:scale-100 intersect:opacity-100
          transition
        </small>
        <p className="my-8 lg:my-12 text-gray-500">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <p className="my-8 lg:my-12 text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi.
        </p>
        <div className="translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
          <img
            src="https://picsum.photos/600/400?random=1"
            className="w-full h-80 object-cover bg-slate-300 rounded"
            alt="test"
          />
        </div>
        <small
          className="block text-xs leading-none bg-gray-200 rounded font-mono p-2 my-4 cursor-help opacity-0 intersect:opacity-100 transition duration-1000 intersect-once"
          title="Classes used in the example above"
        >
          translate-x-1/3 intersect:translate-x-0 transition
        </small>
        <p className="my-8 lg:my-12 text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p className="my-8 lg:my-12 text-gray-500">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Ut wisi enim ad minim veniam, quis nostrud
          exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
          commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat
          nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi.
        </p>
        <div className="-translate-x-1/3 intersect:translate-x-0 transition ease-out duration-500">
          <img
            src="https://picsum.photos/600/400?random=2"
            className="w-full h-80 object-cover bg-slate-300 rounded"
            alt="test"
          />
        </div>
        <small
          className="block text-xs leading-none bg-gray-200 rounded font-mono p-2 my-4 cursor-help opacity-0 intersect:opacity-100 transition duration-1000 intersect-once"
          title="Classes used in the example above"
        >
          -translate-x-1/3 intersect:translate-x-0 transition
        </small>
        <p className="my-8 lg:my-12">
          This is the end of this page.
          <br />
          Now get creative and build your own!
        </p>
        <a
          href="https://github.com/heidkaemper/tailwindcss-intersect/blob/main/docs/example/index.html"
          className="underline hover:no-underline"
        >
          Link to Source Code
        </a>
      </div>
    </div>
  );
}
