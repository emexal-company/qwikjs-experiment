export const fetchSuperHeaderData = (pageId: string, pageType: string, countryCode: string, languageCode: string, userProfileName: string) =>
  fetch("/mapi/PageContentAPI/getSuperHeaderForPage", {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      currentCountryCode: countryCode,
      currentLanguageCode: languageCode,
      currentUserProfileName: userProfileName,
      pageId: pageId,
      pageType: pageType,
    }),
  });
