"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function () {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  function ClickHandler() {
    if (clientId === "" || clientSecret === "") {
      toast({
        title: "Invalid Input",
        description: "Please Try Again!!",
      });
      return;
    }
  }
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Twitter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="API_KEY">
                  API_KEY
                </Label>
                <Input
                  onChange={(e) => {
                    setClientId(e.target.value);
                  }}
                  id="API_KEY"
                  placeholder="Enter API_KEY"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="API_SECRET">
                  API_SECRET
                </Label>
                <Input
                  onChange={(e) => {
                    setClientSecret(e.target.value);
                  }}
                  id="API_SECRET"
                  placeholder="Enter API_SECRET"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="ACCESS_TOKEN">
                  ACCESS_TOKEN
                </Label>
                <Input
                  onChange={(e) => {
                    setClientId(e.target.value);
                  }}
                  id="ACCESS_TOKEN"
                  placeholder="Enter ACCESS_TOKEN"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="ACCESS_TOKEN_SECRET">
                  ACCESS_TOKEN_SECRET
                </Label>
                <Input
                  onChange={(e) => {
                    setClientSecret(e.target.value);
                  }}
                  id="ACCESS_TOKEN_SECRET"
                  placeholder="Enter ACCESS_TOKEN_SECRET"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={ClickHandler}>Save</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Google Api</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-1">
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="GOOGLE_API_KEY">
                  GOOGLE_API_KEY
                </Label>
                <Input
                  onChange={(e) => {
                    setClientId(e.target.value);
                  }}
                  id="GOOGLE_API_KEY"
                  placeholder="Enter GOOGLE_API_KEY"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
