"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import DarkMode from "./DarkMode";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";

function Profile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="w-10 h-10 rounded-full flex items-center border-2 border-transparent [&>span]:text-base"
          size="icon"
          variant="outline">
          <UserIcon className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <div />
        <div>
          <div className="flex flex-col gap-1.5 p-4">
            <Link className="flex items-center gap-2" href="#">
              <UserIcon className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            <Link className="flex items-center gap-2" href="#">
              <SettingsIcon className="w-4 h-4" />
              <span>Settings</span>
            </Link>
            <div />
            <Link className="flex items-center gap-2" href="/">
              <LogOutIcon className="w-4 h-4" />
              <span
                onClick={() => {
                  signOut();
                }}>
                Log out
              </span>
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function LogOutIcon(props: any) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function (req: any) {
  const session = useSession();
  const status = JSON.stringify(session.status);
  return (
    <>
      {status === `"authenticated"` ? (
        <>
          <div className="flex items-center gap-4">
            <DarkMode />
            <Profile />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Register</Button>
            </Link>
            <DarkMode />
          </div>
        </>
      )}
    </>
  );
}
