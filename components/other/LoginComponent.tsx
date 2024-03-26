"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { validateEmail, validatePassword } from "./validation";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const searchParams = useSearchParams();
  const [password, setPassword] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = await validateEmail(email);
    const passwordError = await validatePassword(password);

    if (emailError || passwordError) {
      toast({
        title: "Invalid Input",
        description: `${emailError || ""}${passwordError || ""}`,
      });
      return;
    }

    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl,
      });
      console.log(res);

      if (res?.ok === true) {
        toast({
          title: "Success!",
          description: "Logined successfully",
        });
        router.push("/user");
      } else {
        toast({
          title: "Error",
          description:
            "Login failed. Please check the details provided.",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            required
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            required
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          {"Login"}
        </Button>
        <Button className="w-full" variant="outline">
          {"Login"} with Google
        </Button>
      </div>
    </form>
  );
}
