import { getServerSession } from "next-auth";

async function getUser() {
  const session = await getServerSession();
  return session;
}

export async function Home() {
  const session = await getUser();

  if (session?.user?.name === null) {
    return true;
  }
  return false;
}


