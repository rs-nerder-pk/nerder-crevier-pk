import { useRouter } from "next/router";
import React, { useContext } from "react";
import { OppositeSlugContext } from "context/oppositeSlugContext";
import Link from "next/link";

import styles from "./LanguageSwitch.module.scss";

export default function LanguageSwitch() {
  const router = useRouter();
  const currentLocale = router.locale;
  const allLocales = [...router.locales];
  const currLocalIndex = allLocales.indexOf(currentLocale);

  let oppositeLocale = "en-US";
  if (currLocalIndex > -1) {
    allLocales.splice(currLocalIndex, 1);
    oppositeLocale = allLocales[0];
  }
  const [oppositeSlug, _] = useContext(OppositeSlugContext);

  if (oppositeSlug) {
    return (
      <div className={styles.Switch}>
        <Link locale={oppositeLocale} href={oppositeSlug}>
          {currentLocale === "fr-CA" ? "EN" : "FR"}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.Switch}>
        <Link locale={oppositeLocale} href={"/"}>
          {currentLocale === "fr-CA" ? "EN" : "FR"}
        </Link>
      </div>
    );
  }
}
