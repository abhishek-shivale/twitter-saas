"use client"
import Link from "next/link";
import LeftSide from "./LeftSide";
import MiddelNavbar from "./middelNavbar";
import { useSession } from "next-auth/react";

export default function () {
   const session = useSession();
   const status = JSON.stringify(session.status);
  return (
    <div className="w-full">
      <header className="flex items-center justify-between px-3 h-14 border-b my-4 md:px-6">
        {status === `"authenticated"` ? (
          <>
            <Link className="flex items-center gap-2" href="/user">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">Acme Inc</span>
            </Link>
          </>
        ) : (
          <>
            <Link className="flex items-center gap-2" href="/">
              <MountainIcon className="h-6 w-6" />
              <span className="font-semibold">Acme Inc</span>
            </Link>
          </>
        )}
        <MiddelNavbar />
        <LeftSide />
      </header>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
