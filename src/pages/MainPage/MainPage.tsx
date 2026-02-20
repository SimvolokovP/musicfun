import { TagsList } from "@/shared/ui/TagsList/TagsList";
import "./MainPage.scss";
import { TracksGrid } from "@/features/tracks/TracksGrid/TracksGrid";
import { MOCK_HASHTAGS } from "@/shared/data/hashtags.data";
import { useTranslation } from "react-i18next";

export function MainPage() {
  const { t } = useTranslation();
  return (
    <div className="main-page relative">
      <TagsList className="mb-4" tags={MOCK_HASHTAGS} />

      <h3 className="font-bold text-xl mb-4 md:mb-6">
        {t("tracks.title.new_tracks")}
      </h3>

      <TracksGrid pageSize={10} />
    </div>
  );
}
