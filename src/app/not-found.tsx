import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-bazar-primary mb-2">৪০৪</h1>
      <h2 className="text-2xl font-semibold text-bazar-text mb-4">
        পৃষ্ঠাটি পাওয়া যায়নি
      </h2>
      <p className="text-bazar-muted mb-6 max-w-md">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।
      </p>
      <Link
        href="/"
        className="rounded-lg bg-bazar-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}