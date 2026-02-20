import { useTracks } from "../use-tracks.query";
import { TracksItem } from "../TracksItem/TracksItem";
import { TracksItemSkeleton } from "../TracksItem/TracksItemSkeleton";

interface TracksGridProps {
  pageSize?: number;
}

export const TracksGrid = ({ pageSize = 10 }: TracksGridProps) => {
  const { data: tracks, isLoading } = useTracks({
    params: { pageSize },
  });

  const SKELETON_COUNT = pageSize;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
      {isLoading
        ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <li key={`skeleton-${index}`}>
              <TracksItemSkeleton />
            </li>
          ))
        : tracks?.data?.data.map((track) => (
            <li key={track.id}>
              <TracksItem track={track.attributes} />
            </li>
          ))}
    </ul>
  );
};
