"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
  const { isAuthenticated , isLoading} = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 dark:text-white",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className=" md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* if loading , show loading...  */}
        {isLoading && (
         <Spinner />
        )}
        {/* if we are not authenticated, if not loading show aignin button */}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant='ghost' size='sm'>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size='sm'>
               Get Notecommit free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
          <Button variant="ghost" size="sm" asChild>
            <Link href='/documents'>
              Enter Notecommit
            </Link>
          </Button>
          <UserButton
          afterSignOutUrl="/"
          />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
