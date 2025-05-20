export default function Loading() {
  return (
    <main
      className="mt-[77px] my-14 container mx-auto"
      aria-busy="true"
      aria-label="Page loading"
      role="status"
    >
      <div className="flex items-center justify-center h-[calc(100vh-400px)] space-x-2">
        <p className="text-7xl font-thin">L</p>
        <div
          className="size-10 border-8 border-dashed border-[#40854a] rounded-full mt-4 animate-spin"
          aria-hidden="true"
        ></div>
        <p className="text-7xl font-thin">
          ading<span>...</span>
        </p>
        <span className="sr-only">Content is loading, please wait.</span>
      </div>
    </main>
  );
}
