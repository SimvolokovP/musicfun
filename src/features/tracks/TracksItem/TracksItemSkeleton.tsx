import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";


export const TracksItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="relative w-full aspect-square rounded-lg" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  );
};