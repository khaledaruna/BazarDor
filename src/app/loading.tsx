export default function Loading() {
  return (
    <div className="animate-pulse space-y-8" aria-label="লোড হচ্ছে">
      <div className="h-64 rounded-3xl bg-stone-200 sm:h-80" />

      <div>
        <div className="mb-5 h-7 w-52 rounded bg-stone-200" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border border-stone-200 bg-white p-5"
            >
              <div className="size-16 rounded-2xl bg-stone-200" />
              <div className="mt-5 h-5 w-3/4 rounded bg-stone-200" />
              <div className="mt-3 h-4 w-1/2 rounded bg-stone-200" />
              <div className="mt-6 h-8 w-2/3 rounded bg-stone-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}