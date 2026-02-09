import type { ElementType } from "react";
import type { PUBLIC_URL } from "./router.config";

type PublicUrlPaths = typeof PUBLIC_URL.main | typeof PUBLIC_URL.tracks;

export interface IRoute {
  path: PublicUrlPaths;
  element: ElementType;
}
