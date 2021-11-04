import i18n from "i18n-js";

import fr from "./locales/fr.json";
import en from "./locales/en.json";
import yb from "./locales/yb.json";
import ig from "./locales/ig.json";

i18n.defaultLocale = "en";
i18n.fallbacks = true;
i18n.translations = {
  fr,
  yb,
  en,
  ig,
};

export default i18n;
