import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full text-center">
      <div className="mx-auto text-gray-900 dark:text-gray-50">
        <path
          d="M100 0C44.771 0 0 44.771 0 100s44.771 100 100 100 100-44.771 100-100S155.229 0 100 0zm0 180c-47.238 0-85-38.262-85-85s37.762-85 85-85 85 38.262 85 85-37.762 85-85 85z"
          fill="currentColor"
        />
        <path
          d="M100 40c-13.807 0-25 11.193-25 25s11.193 25 25 25 25-11.193 25-25-11.193-25-25-25zm0 40c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20z"
          fill="currentColor"
        />
        <path
          d="M100 140c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20zm0 30c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
          fill="currentColor"
        />
      </div>
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">
          404 - Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sorry, we couldn't find what you were looking for.
        </p>
        <Link
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          href="#">
          Return Home
        </Link>
      </div>
    </div>
  );
}
