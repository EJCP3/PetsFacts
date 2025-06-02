export const getTranslation = async (id) => {
  const data = await fetch(`https://api.mymemory.translated.net/get?q=${id}&langpair=en|es`);
   const url = await data.json()
  const traducion = url.matches[0]?.translation;
  return traducion
};
