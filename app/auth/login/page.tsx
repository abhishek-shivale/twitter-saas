import LoginComponent from "@/components/other/LoginComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function () {
  return (
    <Card className="mx-auto mt-24 max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginComponent />
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <Link className="underline" href="/auth/register">
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
