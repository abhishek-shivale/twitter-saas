import RegisterComponent from "@/components/other/RegisterComponent";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";

export default function () {
 
  return (
    <Card className="mx-auto mt-24 max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Register</CardTitle>
        <CardDescription>
          Enter your email below to register to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterComponent />
        <div className="mt-4 text-center text-sm">
          have an account?
          <Link className="underline" href="/auth/login">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
