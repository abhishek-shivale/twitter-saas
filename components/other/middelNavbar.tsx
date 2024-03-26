"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function () {
  const session = useSession();
  const status = JSON.stringify(session.status);
  return (
    <>
      <nav className="hidden space-x-2 md:flex md:gap-3 items-center text-lg font-medium">
        {status === `"authenticated"` ? (
          <>
            <Link className="text-gray-900 dark:text-gray-50" href="/user">
              Home
            </Link>
            <Link href="/user/add-cron-job">Add-Cron-Job</Link>
          </>
        ) : (
          <>
            <Link className="text-gray-900 dark:text-gray-50" href="/">
              Home
            </Link>
            <Link href="#">Features</Link>
          </>
        )}

        <Link href="#">Pricing</Link>
        <Link href="#">Contact</Link>
      </nav>
    </>
  );
}
