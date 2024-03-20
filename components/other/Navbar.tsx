import Link from "next/link";
import { Button } from "@/components/ui/button";
import DarkMode from "./DarkMode";

export default function () {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between px-4 h-14 border-b md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold">Acme Inc</span>
        </Link>
        <nav className="hidden space-x-2 md:flex items-center text-sm font-medium">
          <Link className="text-gray-900 dark:text-gray-50" href="#">
            Home
          </Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign in</Button>
          <Button>Sign Up</Button>
          <DarkMode />
        </div>
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
