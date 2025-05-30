const DOG_ENDPOINT_PICTURES = 'https://dog.ceo/api/breeds/image/random'



export const getDogPictures = async () => {
const data = await fetch(DOG_ENDPOINT_PICTURES)
const url = await fetch(data.url)
return url
}

export const getDogFacts = 'https://catfact.ninja/fact'