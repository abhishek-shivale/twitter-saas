"use client";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow, TableBody, Table } from "@/components/ui/table";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

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
    <div className="flex h-screen w-full">
      {/* <div className="flex-none w-48 border-r">
        <div className="flex flex-col h-full py-4 text-sm">
          <nav className="flex-1 flex flex-col justify-between items-center py-1">
            <div className="flex  flex-col gap-6 ">
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none "
                href="#">
                <HomeIcon className="w-6 h-6" />
                Home
              </Link>
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <PieChartIcon className="w-6 h-6" />
                Analytics
              </Link>
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <CalendarIcon className="w-6 h-6" />
                Calendar
              </Link>
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <TwitterIcon className="w-6 h-6" />
                Hashtags
              </Link>
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <QuoteIcon className="w-6 h-6" />
                Mentions
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                className="flex mt-6 items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <SettingsIcon className="w-6 h-6" />
                Settings
              </Link>
              <Link
                className="flex items-center gap-4 text-sm font-medium rounded-md/none hover:bg-gray-10 dark:hover:text-gray-50"
                href="#">
                <HelpCircleIcon className="w-6 h-6" />
                Help
              </Link>
            </div>
          </nav>
        </div>
      </div> */}
      <div className="flex flex-col flex-1 gap-4 p-4 md:gap-8 md:p-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Connect to Twitter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="client-id">
                  Client ID
                </Label>
                <Input
                  onChange={(e) => {
                    setClientId(e.target.value);
                  }}
                  id="client-id"
                  placeholder="Enter client ID"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm" htmlFor="client-secret">
                  Client Secret
                </Label>
                <Input
                  onChange={(e) => {
                    setClientSecret(e.target.value);
                  }}
                  id="client-secret"
                  placeholder="Enter client secret"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={ClickHandler} className="ml-auto">
              Save
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Recent Tweets</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Great day for a walk
                  </TableCell>
                  <TableCell>23</TableCell>
                  <TableCell>45</TableCell>
                  <TableCell className="text-right">2m ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Check out our new feature
                  </TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>30</TableCell>
                  <TableCell className="text-right">1h ago</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Excited to announce our new product
                  </TableCell>
                  <TableCell>45</TableCell>
                  <TableCell>98</TableCell>
                  <TableCell className="text-right">1d ago</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function HelpCircleIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function PieChartIcon(props: any) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function QuoteIcon(props: any) {
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
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
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

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
