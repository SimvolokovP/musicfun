import { CLIENT } from "@/shared/api/client";
import type { SchemaGetTracksRequestPayload } from "@/shared/api/schema";
import { useQuery } from "@tanstack/react-query";

export function useTracks({
  params,
}: {
  params: Partial<SchemaGetTracksRequestPayload>;
}) {
  const query = useQuery({
    queryKey: ["tracks"],
    queryFn: () =>
      CLIENT.GET("/playlists/tracks", {
        params: {
          query: params,
        },
      }),
  });

  return query;
}
