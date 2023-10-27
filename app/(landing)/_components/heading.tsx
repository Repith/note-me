"use client";

import { ArrowRight } from "lucide-react";

import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className=" max-w-3xl space-y-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl  font-bold text-center  w-full ">
        Your &#128161;Ideas, &#128209;Documents &
        &#129504;Thoughts in one place. <br />
        This is <span className="underline">NoteMe</span>.
      </h1>
      <h3 className=" sm:text-xl md:text-2xl font-medium text-center  w-full ">
        NoteMe is the connected workspace <br /> where
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter NoteMe
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get NoteMe free{" "}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
