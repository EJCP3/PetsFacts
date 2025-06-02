const CAT_ENDPOINT_PICTURES = "https://api.thecatapi.com/v1/images/search";
const CAT_ENDPOINT_PICTURES1 = 'https://cataas.com/cat'

const CAT_ENDPOINT_FACTS = "https://catfact.ninja/fact";

export const getCatPictures = async () => {
  const data = await fetch(CAT_ENDPOINT_PICTURES);
  const url = await data.json()

  const imgUrl = url[0]?.url
  return imgUrl

};

export const getCatFacts = async () => {
  const data = await fetch(CAT_ENDPOINT_FACTS);
  const { fact } = await data.json();
  return fact;
};

