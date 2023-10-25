"use client";

import Image from "next/image";
import { useMutation } from "convex/react";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";

import { ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const CoverImage = ({
  url,
  preview,
}: CoverImageProps) => {
  const { edgestore } = useEdgeStore();
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(
    api.documents.removeCoverImage
  );

  const onCoverRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }

    removeCoverImage({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && (
        <Image
          src={url}
          fill
          alt="Cover"
          className="object-cover"
        />
      )}
      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-32 flex items-center gap-x-1 ">
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-muted-foreground text-xs "
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onCoverRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

CoverImage.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};
