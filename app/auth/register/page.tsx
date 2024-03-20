import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function () {
  return (
    <Card className="mx-auto mt-8 max-w-sm">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Register</CardTitle>
        <CardDescription>
          Enter your email below to register to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Register
          </Button>
          <Button className="w-full" variant="outline">
            Register with Google
          </Button>
        </div>
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
