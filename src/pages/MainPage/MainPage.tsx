import { useTranslation } from "react-i18next";
import { MOCK_HASHTAGS } from "../../shared/data/hashtags.data";
import { TagsList } from "../../shared/ui/TagsList/TagsList";
import "./MainPage.scss";

export function MainPage() {
  const { t } = useTranslation();

  return (
    <div className="main-page">
      <TagsList className="mb-4" tags={MOCK_HASHTAGS} />
      <h3 className="font-bold text-xl">{t("tracks.title.new_tracks")}</h3>
    </div>
  );
}
