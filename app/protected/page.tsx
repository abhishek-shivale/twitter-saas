"use client";
import { useSession } from "next-auth/react";

export default function MyComponent(req: any) {
  const session = useSession();
  const status = JSON.stringify(session.status)
  return <p>{status === `"authenticated"`?<>true</>:<>false</>}</p>;
}
