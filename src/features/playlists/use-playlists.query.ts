import { CLIENT } from "@/shared/api/client";
import type { SchemaGetPlaylistsRequestPayload } from "@/shared/api/schema";
import { useQuery } from "@tanstack/react-query";

export function usePlaylists({
  params,
}: {
  params: Partial<SchemaGetPlaylistsRequestPayload>;
}) {
  const query = useQuery({
    queryKey: ["playlists"],
    queryFn: () =>
      CLIENT.GET("/playlists", {
        params: {
          query: {
            ...params,
            search: params.search || undefined,
            tagsIds: params.tagsIds ? params.tagsIds : undefined,
          },
        },
      }),
  });

  return query;
}
