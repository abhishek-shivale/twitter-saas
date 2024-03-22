"use client"
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; 
import { useRouter } from "next/navigation";
import {validateEmail, validatePassword} from "./validation"
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email, password }), 
      });

      const data = await res.json()
      if (data.success === true) {
        toast({
          title: "Success!",
          description: "Account created successfully",
        });
        router.push("/auth/register");
      } else if (data.success === false) {
        toast({
          title: "Unsuccess!",
          description: `${data.message}`,
        });
      } else {
        toast({
          title: "Error",
          description:
            "Registration failed. Please check the details provided.",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
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
          {"Register"}
        </Button>
        <Button className="w-full" variant="outline">
          {"Register"} with Google
        </Button>
      </div>
    </form>
  );
}
