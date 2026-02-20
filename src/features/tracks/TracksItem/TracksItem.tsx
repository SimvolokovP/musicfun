import type { SchemaTrackListItemAttributes } from "@/shared/api/schema";

interface TracksListProps {
  track: SchemaTrackListItemAttributes;
}

export function TracksItem({ track }: TracksListProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full aspect-square bg-bg-interactive-secondary rounded-lg overflow-hidden">
        {track.images?.main?.[0] ? (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={track.images.main[0].url}
            alt={track.title}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-4xl">
            🎵
          </div>
        )}
      </div>

      <div className="font-bold truncate text-center text-sm">
        {track.title}
      </div>
    </div>
  );
}
