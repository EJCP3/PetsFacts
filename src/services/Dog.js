const DOG_ENDPOINT_PICTURES = 'https://dog.ceo/api/breeds/image/random'
const DOG_ENDPOINT_FACTS = 'https://dogapi.dog/api/v2/facts'


export const getDogPictures = async () => {
const data = await fetch(DOG_ENDPOINT_PICTURES)
const {message} = await data.json()
return message
}

export const getDogFacts = async () => {
const data = await fetch(DOG_ENDPOINT_FACTS)
const fact = await data.json()
return fact.data[0].attributes.body
}