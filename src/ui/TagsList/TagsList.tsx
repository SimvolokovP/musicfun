import { Link } from "react-router-dom";
import { Tag } from "../Tag/Tag";
import clsx from "clsx";

type TagsListProps = {
  tags: string[];
  entity?: "tracks" | "playlists";
  className?: string;
};

export const TagsList = ({ tags, entity = "tracks", className }: TagsListProps) => {
  return (
    <ul className={clsx("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Tag as={Link} to={`/${entity}?tag=${tag}`} tag={tag} />
        </li>
      ))}
    </ul>
  );
};
